import React, { Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import plugins from './components';

function getViewComponent(routeKey?: string) {
    if (!routeKey) {
        return <span></span>;
    }

    const Component = plugins[routeKey];

    if (!Component) {
        throw new Error(`路由“${routeKey}”没有对应的组件文件！`);
    }

    return <Component />;
}

export default function Index() {
    const params = useParams();

    return <Suspense fallback={<span>loading</span>}>{getViewComponent(params.component)}</Suspense>;
}
