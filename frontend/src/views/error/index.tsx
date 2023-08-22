import React from 'react';
import { App } from '@/layouts/default';
import { useRouteError } from 'react-router-dom';

export default function Index() {
	const err = useRouteError() as Error;
	return <App>{err.toString()}</App>;
}
