import React, { lazy, Suspense, useEffect, useState } from 'react';

interface IndexProps {
    children?: React.ReactNode;
}

interface Plugin {
    name: string;
    description: string;
    component: React.FC;
}

export default function Index({ children }: IndexProps) {
    // @ts-ignore
    const Comp = lazy(() => import(/* @vite-ignore */ 'http://localhost:5174/packages/index.tsx'));
    // const Comp = lazy(() => import(/* @vite-ignore */ 'http://localhost:4173/assets/index-37de4fc2.js'));
    console.log(Comp);
    return (
        <div>
            <Suspense fallback={<span>loading</span>}>
                <Comp />
            </Suspense>
        </div>
    );
}
