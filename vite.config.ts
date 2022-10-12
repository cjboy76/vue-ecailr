import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [vue()],
      build: {
        target: 'esnext',
        outDir: 'lib',
        lib: {
          entry: resolve(__dirname, './src/index.ts'),
          formats: ['es'],
          fileName: () => 'vue-ecailr.js',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    };
  } else {
    return {
      base: '/vue-ecailr/',
      plugins: [vue()],
    };
  }
});
