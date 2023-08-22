import React from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import './style.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	</React.StrictMode>,
);
