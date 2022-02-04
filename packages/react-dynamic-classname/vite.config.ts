import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

import { peerDependencies, dependencies } from './package.json';

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'classic',
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src', 'index.ts'),
			formats: ['es', 'cjs'],
			fileName: (ext: string): string => `index.${ext}.js`,
			// for UMD name: 'GlobalName'
		},
		rollupOptions: {
			external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
		},
		target: 'esnext',
		sourcemap: true,
	},
});