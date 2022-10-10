import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (mode === 'lib') {
    console.log(command, mode, ssrBuild);

    return {
      plugins: [vue()],

      build: {
        outDir: 'lib',
        lib: {
          entry: resolve(__dirname, '/src/components/main.ts'),
          name: 'VueEcailr',
          fileName: 'vue-ecailr',
          formats: ['es', 'umd', 'cjs'],
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
