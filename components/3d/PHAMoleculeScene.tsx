"use client";

import { useRef, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { WebGLErrorBoundary } from "./WebGLErrorBoundary";

function PolymerChain() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[2, 0.4, 128, 32]} />
                <MeshDistortMaterial
                    color="#00b4a0"
                    envMapIntensity={1}
                    clearcoat={0.8}
                    clearcoatRoughness={0}
                    metalness={0.5}
                    roughness={0.2}
                    distort={0.3}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

/**
 * CSS-only fallback that renders when WebGL is unavailable.
 * Uses layered radial gradients and a pulsing glow to mimic
 * the 3D scene's ambient feel without needing a GPU context.
 */
function CSSFallback() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Primary teal glow orb */}
            <motion.div
                className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,180,160,0.15) 0%, rgba(0,180,160,0.05) 40%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary green glow */}
            <motion.div
                className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(10,77,46,0.2) 0%, rgba(10,77,46,0.05) 50%, transparent 70%)",
                }}
                animate={{
                    scale: [1.05, 1, 1.05],
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating particle dots */}
            {Array.from({ length: 25 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-terra-teal/30"
                    style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${30 + Math.random() * 50}%`,
                    }}
                    animate={{
                        y: [0, -20 - Math.random() * 30, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3,
                    }}
                />
            ))}
        </div>
    );
}

export function PHAMoleculeScene() {
    const [webglFailed, setWebglFailed] = useState(false);

    const handleCreated = useCallback(() => {
        // WebGL context created successfully — nothing to do
    }, []);

    const handleError = useCallback(() => {
        // WebGL context failed — show CSS fallback
        setWebglFailed(true);
    }, []);

    // Pre-check: can we even create a WebGL context?
    if (typeof window !== "undefined" && !webglFailed) {
        try {
            const testCanvas = document.createElement("canvas");
            const gl =
                testCanvas.getContext("webgl2") ||
                testCanvas.getContext("webgl") ||
                testCanvas.getContext("experimental-webgl");
            if (!gl) {
                // No context available — don't even try Canvas
                return <CSSFallback />;
            }
            // Lose the test context immediately so it doesn't count against the limit
            const ext = (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context");
            if (ext) ext.loseContext();
        } catch {
            return <CSSFallback />;
        }
    }

    if (webglFailed) {
        return <CSSFallback />;
    }

    return (
        <WebGLErrorBoundary fallback={<CSSFallback />}>
            <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 45 }}
                    onCreated={handleCreated}
                    onError={handleError}
                    gl={{ failIfMajorPerformanceCaveat: false, powerPreference: "default" }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00b4a0" />
                    <spotLight position={[-10, -10, -5]} intensity={1} color="#0a4d2e" />

                    <PolymerChain />

                    <Sparkles count={200} scale={12} size={4} speed={0.4} opacity={0.6} color="#009688" />

                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>
        </WebGLErrorBoundary>
    );
}
