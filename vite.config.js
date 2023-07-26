import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
    root: 'src',
    server: {
        host: 'localhost',
        port: '8080',
    },
    build: {
      outDir: '../dist',
      emptyOutDir: true
    },
    plugins: [
        handlebars({
          partialDirectory: resolve(__dirname, './src/partials'),
          reloadOnPartialChange: true,
        }),
        FullReload(resolve(__dirname, './src/**/*'))
      ],
});