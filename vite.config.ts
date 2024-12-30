import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base:"/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        user: path.resolve(__dirname, 'index.html'), // 사용자 앱의 index.html
        admin: path.resolve(__dirname, 'src-admin/index.html'), // 어드민 앱의 index.html
      },
    },
  },
});
