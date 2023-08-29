import { FC, lazy, LazyExoticComponent } from 'react';

const views: Record<string, LazyExoticComponent<FC>> = {
    'json-pretty': lazy(() => import('./JsonPretty')),
};

export default views;
