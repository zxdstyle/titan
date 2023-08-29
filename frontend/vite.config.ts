import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
    const rootPath = resolve(process.cwd());
    const srcPath = `${rootPath}/src`;

    return {
        plugins: [react()],
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath,
            },
        },
        build: {
            rollupOptions: {
                // external: ["react", "react-dom"]
            },
        },
    };
});
