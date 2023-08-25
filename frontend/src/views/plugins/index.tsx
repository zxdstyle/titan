import React, { lazy, Suspense } from 'react';

interface IndexProps {
    children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
    const loadComp = async (url: string) => {
        const res = await import(/* @vite-ignore  */ url);
        console.log(res);
    };
    loadComp('https://cdn.liey.cn/plugin.js');
    return (
        <div>
            <Suspense fallback={<span>loading</span>}>
                <div />
            </Suspense>
        </div>
    );
}
