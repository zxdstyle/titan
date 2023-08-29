import React from 'react';
import { createRoot } from 'react-dom/client';
import ConfigProvider from 'antd/es/config-provider';
import './style.css';
import { RouterProvider } from 'react-router-dom';
import { HappyProvider } from '@ant-design/happy-work-theme';
import router from './router';
import dark from './theme/dark';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.Fragment>
        <ConfigProvider theme={dark}>
            <HappyProvider>
                <RouterProvider router={router} />
            </HappyProvider>
        </ConfigProvider>
    </React.Fragment>,
);
