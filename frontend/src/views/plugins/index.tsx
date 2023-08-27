import React, { lazy, Suspense, useRef } from 'react';
import { MicroApp } from '@/components/TitanPlugin';

interface IndexProps {
    children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
    // const Comp = lazy(() => import(/* @vite-ignore */ 'http://localhost:4173/main.js'));
    return (
        <div>
            <Suspense fallback={<span>loading</span>}>
                <MicroApp fallback={<span>loading</span>} entry="http://localhost:4173/main.js" />
            </Suspense>
        </div>
    );
}
