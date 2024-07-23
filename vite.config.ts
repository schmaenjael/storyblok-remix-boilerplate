import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { vercelPreset } from '@vercel/remix/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
  plugins: [remix({ presets: [vercelPreset()], appDirectory: 'src', ssr: true }), tsconfigPaths()],
});
