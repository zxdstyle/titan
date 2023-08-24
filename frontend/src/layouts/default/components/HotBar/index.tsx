import React from 'react';
import { Avatar, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const navigate = useNavigate();

    return (
        <div className="absolute right-0 h-full bg-indigo-950 top-0 flex flex-col p-5">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

            <Button onClick={() => navigate('/plugins/crontab')} className="w-12 h-12"></Button>
        </div>
    );
}
