import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import сhecker from 'vite-plugin-checker';

interface IFileOptions {
  extType: string | undefined;
  type: string | undefined;
}

export default defineConfig(() => ({
  plugins: [
    react(),
    svgr(),
    сhecker({ typescript: true }),
  ],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileOptions: IFileOptions = {
            extType: assetInfo.name?.split('.').at(1),
            type: '',
          };

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(fileOptions.extType || '')) {
            fileOptions.type = 'img';
          } else if (/ttf|woff|eot/i.test(fileOptions.extType || '')) {
            fileOptions.type = 'fonts';
          } else {
            fileOptions.type = fileOptions.extType;
          }

          return `assets/${fileOptions.type}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
}));
