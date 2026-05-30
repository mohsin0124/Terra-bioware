"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { FluidCursor } from "@/components/ui/fluid-cursor";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.05, syncTouch: true }}>
            <FluidCursor />
            {children}
        </ReactLenis>
    );
}
