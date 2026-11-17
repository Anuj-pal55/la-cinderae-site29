import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';

const htmlEntries = Object.fromEntries(
  readdirSync(process.cwd())
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace('.html', ''), resolve(process.cwd(), file)])
);

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: htmlEntries
    }
  }
});
