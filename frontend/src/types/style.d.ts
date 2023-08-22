import { CSSProperties } from 'react';

declare module 'react' {
    interface CSSProperties {
        '--wails-draggable'?: "drag" | "no-drag";
    }
}
