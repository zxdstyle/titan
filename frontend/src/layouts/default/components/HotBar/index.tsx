import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

export default function Index() {
    return (
        <div className="absolute right-0 h-full bg-indigo-950 top-0 flex flex-col p-5 gap-3">
            {/*<Button onClick={() => navigate('/plugins/crontab')} type="primary" className="w-12 h-12"></Button>*/}

            <QuickLink page="/plugins/crontab" />
        </div>
    );
}

function QuickLink({ page }: { page: string }) {
    const navigate = useNavigate();

    return (
        <button className="w-11 h-11 rounded-xl bg-blue-500 cursor-pointer active:scale-90 transition-all flex items-center justify-center" onClick={() => navigate(page)}>
            <FaCog />
        </button>
    );
}
