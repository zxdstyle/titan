import React from 'react';

interface IndexProps {
	children?: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
	return (
		<div className="w-full py-1 px-3 overflow-hidden" style={{ '--wails-draggable': 'drag' }}>
			<img src="https://assets.codepen.io/3685267/react-streaming-dashboard-logo.jpg" alt="logo" />
		</div>
	);
}
