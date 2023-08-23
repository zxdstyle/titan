import React from 'react';
import TitleBar from './components/TitleBar';
import HotBar from './components/HotBar';
import { Outlet } from 'react-router-dom';

export function App({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<div className="h-64 w-20 rounded-3xl shadow-xl bg-indigo-950 absolute -left-10 top-20" style={{ '--wails-draggable': 'drag' }}></div>

			<div className="h-full w-full overflow-hidden relative rounded-3xl">
				<HotBar />

				<div className="flex flex-col h-full">
					<TitleBar />

					<div className="h-full w-full pl-12 pr-24">{children}</div>
				</div>
			</div>
		</main>
	);
}

export default function Layout() {
	return (
		<App>
			<Outlet />
		</App>
	);
}
