import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default ({ mode, command }) => {
    const { VITE_SERVER_HMR_PORT: clientPort, VITE_SERVER_HMR_HOST: host } = loadEnv(mode, process.cwd())

    return defineConfig({
        server: {
            hmr: {
                // @ts-ignore
                clientPort,
                host,
            }
        },
        plugins: [
            laravel({
                input: 'resources/js/app.tsx',
                ssr: 'resources/js/ssr.tsx',
                refresh: true,
            }),
            react(),
        ],
    });
};
