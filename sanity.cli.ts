import path from 'path';
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'pgbkmfzt',
    dataset: 'production',
  },
  vite: (prev) => ({
    ...prev,
    resolve: {
      ...prev.resolve,
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }),
});
