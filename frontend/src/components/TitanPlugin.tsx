import React, { CSSProperties, useEffect, useRef, useState } from 'react';

interface Props {
    fallback: React.ReactNode;
    entry: string;
    renderError?: (err: Error) => React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

interface Plugin {
    render: (container: HTMLElement) => React.ReactNode;
}

/**
 * 微应用加载组件
 */
export function MicroApp({ entry, fallback, renderError, className, style, ...props }: Props) {
    // 传递给子应用的节点
    const containerRef = useRef(null);
    // 子应用配置
    const configRef = useRef<Plugin>();
    // 加载中
    const [loading, setLoading] = useState(true);
    // 错误信息
    const [errorMsg, setErrorMsg] = useState();
    useEffect(() => {
        handleLoadApp(entry)
            .then(res => resolveErrors(res, entry, containerRef))
            .then((config: Plugin) => {
                setLoading(false);
                configRef.current = config;
            })
            .catch(msg => {
                console.error(msg);
                setLoading(false);
                setErrorMsg(typeof msg === 'string' ? msg : (msg && msg.message) || `Failed to load: ${entry}`);
            });
    }, []);
    const config = configRef.current;
    return React.createElement(
        'div',
        { className: className, ref: containerRef, style: style },
        errorMsg ? (renderError ? renderError(errorMsg) : errorMsg) : loading && fallback ? fallback : config && config.render && config.render(props),
    );
}
function handleLoadApp(entry) {
    if (typeof entry === 'function') {
        return entry();
    }
    const source = `${entry}?microAppEnv&t=${Date.now()}`;
    return import(/* @vite-ignore */ source);
}
function resolveErrors(res, entry, containerRef) {
    if (typeof res.default !== 'function') {
        return Promise.reject(`[MicroApp] - 导出格式不正确: ${entry}`);
    }
    return res.default(containerRef.current);
}
