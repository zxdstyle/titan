import React, { useEffect } from 'react';
import MonacoEditor, { useMonaco } from '@monaco-editor/react';

interface IndexProps {
    children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
    const monaco = useMonaco();

    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('dark', {
                base: 'vs-dark',
            });
            console.log('here is the monaco instance:', monaco);
        }
    }, [monaco]);

    return <MonacoEditor height="100%" theme="vs-dark"></MonacoEditor>;
}
