import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [tailwindcss()],

    resolve: {
        tsconfigPaths: true,
    },

    test: {
        coverage: {
            include: ['src'],
            exclude: ['src/index.tsx', 'src/components/ui', 'src/lib'],
        },
        environment: 'jsdom',
        setupFiles: ['src/__tests__/setup.ts'],
    },
});
