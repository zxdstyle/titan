import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(cfg => {
	const rootPath = resolve(process.cwd());
	const srcPath = `${rootPath}/src`;
	const pluginPath = `${rootPath}/plugins`;

	return {
		root: '../frontend',
		plugins: [react()],
		resolve: {
			alias: {
				'~': rootPath,
				'@': srcPath,
				'@plugins': pluginPath,
			},
		},
	};
});
