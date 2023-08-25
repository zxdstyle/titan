import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '@/layouts/default';
import Dashboard from '@/views/dashboard';
import Error from '@/views/error';
import Plugin from '@/views/plugins';

import Crontab from '@/views/plugins/crontab';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: '/plugins',
                element: <Plugin />,
            },
            {
                path: '/plugins/crontab',
                element: <Crontab />,
            },
        ],
        errorElement: <Error />,
    },
]);

export default router;
