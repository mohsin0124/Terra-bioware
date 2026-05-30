"use client";

import React from "react";

interface Props {
    children: React.ReactNode;
    fallback: React.ReactNode;
}

interface State {
    hasError: boolean;
}

/**
 * A simple React ErrorBoundary that catches WebGL and Three.js
 * runtime crashes and renders a fallback instead of crashing the app.
 */
export class WebGLErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        // Silently log — this is expected when WebGL is unavailable
        console.warn("[Terra Bioware] WebGL unavailable, using CSS fallback:", error.message);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}
