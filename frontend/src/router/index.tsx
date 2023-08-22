import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '@/layouts/default';
import Home from '@/views/home';
import Error from '@/views/error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
		errorElement: <Error />,
	},
]);

export default router;
