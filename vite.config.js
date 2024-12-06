import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    plugins: [
        injectHTML(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});
