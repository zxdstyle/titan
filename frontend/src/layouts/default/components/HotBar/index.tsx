import React from 'react';
import { Avatar, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
	const navigate = useNavigate();

	return (
		<div className="absolute right-0 h-full p-5 bg-indigo-950 top-0 flex flex-col gap-5">
			<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
			<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

			<div>
				<Button isIconOnly color="primary" size="lg" onClick={() => navigate('/plugins/crontab')}></Button>
			</div>
		</div>
	);
}
