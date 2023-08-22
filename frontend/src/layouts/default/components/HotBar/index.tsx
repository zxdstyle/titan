import React from 'react';
import { Avatar, Button } from '@nextui-org/react';

interface IndexProps {
	children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
	return (
		<div className="absolute right-0 h-full px-4 py-3 bg-indigo-950 top-0 flex flex-col">
			<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
			<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

			<div>
				<Button isIconOnly color="primary"></Button>
			</div>
		</div>
	);
}
