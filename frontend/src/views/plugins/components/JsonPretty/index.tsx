import React from 'react';
import Editor from '@/components/Editor';

interface IndexProps {
    children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
    return (
        <div className="h-full">
            <Editor />
        </div>
    );
}
