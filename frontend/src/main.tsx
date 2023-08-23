import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './style.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import dark from './theme/dark';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ConfigProvider theme={dark}>
            <RouterProvider router={router} />
        </ConfigProvider>
    </React.StrictMode>,
);
