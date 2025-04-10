import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@assets': resolve(__dirname, 'assets'), // Alias for your assets directory
        },
    },

    optimizeDeps: {
        include: ['swiper', 'rellax'], // Pre-bundle Swiper and Rellax for efficiency
    },

    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html'), // Main entry point
            external: ['swiper', 'rellax'], // Treat Swiper and Rellax as external libraries
        },
    },
});