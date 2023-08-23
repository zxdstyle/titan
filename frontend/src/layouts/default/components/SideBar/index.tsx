import React from 'react';
import { Button } from 'antd';
import { FaCog, FaCube, FaCubes, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const navigate = useNavigate();

    return (
        <div className="w-20 rounded-3xl shadow-xl bg-indigo-950 absolute -left-10 top-20 overflow-hidden" style={{ '--wails-draggable': 'drag' }}>
            <div className="flex flex-col items-center justify-between h-full">
                <div className="h-20 w-20 flex items-center justify-center cursor-pointer text-white bg-primary-400" onClick={() => navigate('/')}>
                    <FaHome size={28} />
                </div>
                <div className="h-20 w-20 flex items-center justify-center cursor-pointer text-primary-300 hover:bg-primary-400">
                    <FaCubes size={28} />
                </div>
                <div className="h-20 w-20 flex items-center justify-center cursor-pointer text-primary-300">
                    <FaCog size={28} />
                </div>
            </div>
        </div>
    );
}
