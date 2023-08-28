import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
    const rootPath = resolve(process.cwd());
    const srcPath = `${rootPath}/src`;

    return {
        root: '../frontend',
        plugins: [react()],
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath,
                react: "https://esm.sh/react@18.2.0",
                "react-dom": "https://esm.sh/react-dom@18.2.0"
            },
        },
        build: {
            rollupOptions: {
                // external: ["react", "react-dom"]
            }
        },
    };
});
