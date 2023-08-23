import React from 'react';
import OperateBar from '../OperateBar';

interface IndexProps {
	children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
	return (
		<div className="w-full p-5 overflow-hidden" style={{ '--wails-draggable': 'drag' }}>
			<OperateBar />
		</div>
	);
}
