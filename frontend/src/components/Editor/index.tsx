import React, { useEffect, useState } from 'react';
import MonacoEditor, { useMonaco } from '@monaco-editor/react';

interface IndexProps {
    children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
    const monaco = useMonaco();
    const [editorOptions, setEditorOptions] = useState({
        theme: 'dark', // 初始主题
    });

    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('dark', {
                base: 'vs-dark',
                inherit: true,
                rules: [],
                colors: {
                    'editor.background': '#595284',
                },
            });
            setEditorOptions(val => ({ ...val, theme: 'dark' }));
            console.log('here is the monaco instance:', monaco);
        }
    }, [monaco]);

    return <MonacoEditor height="100%" options={editorOptions}></MonacoEditor>;
}
// {
//     "base": "vs-dark", // 选择一个基础主题，可以是 "vs", "vs-dark", "hc-black"
//     "inherit": true, // 是否继承基础主题的样式
//     "colors": {
//     "editor.foreground": "#F8F8F8", // 编辑器前景色（文本颜色）
//         "editor.background": "#333333", // 编辑器背景色
//         "editorLineNumber.foreground": "#AAAAAA", // 行号颜色
//         "editorLineNumber.activeForeground": "#CCCCCC", // 活动行号颜色
//         "editorCursor.foreground": "#A9A9A9", // 光标颜色
//         "editor.selectionBackground": "#6666CC", // 选中文本的背景色
//         "editor.wordHighlightBackground": "#FFA50033", // 高亮单词的背景色
//         "editor.findMatchBackground": "#FFFF00", // 查找匹配的背景色
//         "editor.hoverHighlightBackground": "#FFA50022" // 鼠标悬停时的背景色
// },
//     "rules": [
//     {
//         "token": "comment",
//         "foreground": "#009800", // 注释文本颜色
//         "fontStyle": "italic"
//     },
//     {
//         "token": "keyword",
//         "foreground": "#0000FF" // 关键字颜色
//     },
//     {
//         "token": "string",
//         "foreground": "#DD1144" // 字符串颜色
//     },
//     {
//         "token": "number",
//         "foreground": "#09885A" // 数字颜色
//     }
// ]
// }
