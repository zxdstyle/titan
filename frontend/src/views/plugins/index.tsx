import React, { lazy, Suspense, useRef } from 'react';

interface IndexProps {
    children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
    const Comp = lazy(() => import(/* @vite-ignore */ 'http://localhost:4173/plugin.js'));
    return (
        <div>
            <Suspense fallback={<span>loading</span>}>
                <Comp  />
            </Suspense>
        </div>
    );
}
