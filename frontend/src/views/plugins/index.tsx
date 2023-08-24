import React, { lazy, Suspense } from 'react';

interface IndexProps {
    children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
    // @ts-ignore
    const Comp = lazy(() => import(/* @vite-ignore */ 'https://cdn.liey.cn/plugin.mjs'));
    return (
        <div>
            <Suspense fallback={<span>loading</span>}>
                <Comp></Comp>
            </Suspense>
        </div>
    );
}
