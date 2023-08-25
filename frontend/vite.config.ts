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
        build: {
            cssMinify: true,
            rollupOptions: {
                external: ['react', 'react-dom'],
            },
        },
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath,
                '@plugins': pluginPath,
                react: 'https://esm.sh/react@18.2.0',
                'react-dom': 'https://esm.sh/react-dom@18.2.0',
            },
        },
    };
});
