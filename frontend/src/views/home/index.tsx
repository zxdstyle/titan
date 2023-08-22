import React, { lazy, Suspense } from 'react';

interface IndexProps {
	children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
	const Comp = lazy(async () => await import(/* @vite-ignore */ `@plugins/${path}.js`));

	return (
		<div className="w-full h-full">
			<Suspense fallback={<>loading</>}>{/*<Comp />*/}</Suspense>
		</div>
	);
}
