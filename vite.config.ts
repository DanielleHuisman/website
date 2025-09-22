import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tailwindcss(), tsconfigPaths()],
    test: {
        coverage: {
            include: ['src'],
            exclude: ['src/index.tsx', 'src/components/ui', 'src/lib'],
        },
        environment: 'jsdom',
        setupFiles: ['src/__tests__/setup.ts'],
    },
});
