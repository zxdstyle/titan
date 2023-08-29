import React from 'react';
import SideBar from './components/SideBar';
import TitleBar from './components/TitleBar';
import HotBar from './components/HotBar';
import { Outlet } from 'react-router-dom';

export function App({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <SideBar />

            <div className="h-full w-full overflow-hidden relative rounded-3xl">
                <HotBar />

                <div className="flex flex-col h-full">
                    <TitleBar />

                    <div className="h-full w-full pl-12 pb-12 pr-24">{children}</div>
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
