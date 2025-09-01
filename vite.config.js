import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
   
    const env = loadEnv(mode, process.cwd());

    return {
        build: {
            minify: env.APP_ENV === 'production' ? 'esbuild' : false,
            cssMinify: env.APP_ENV === 'production',
        },
        plugins: [
            laravel({
                input: ['resources/react_frontend/main.tsx'],
                refresh: true,
            }),
            react(),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/react_frontend'),
            },
        },
        define: {
            
            'process.env': env,
        },
    };
});
