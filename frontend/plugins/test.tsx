import React from 'react';

interface TestProps {
	children?: React.ReactNode;
}

export default function Test({ children }: TestProps) {
	return <div>test</div>;
}
