import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [
    vue(),
  ], 
  base:'./',
 
})

// import { fileURLToPath, URL } from 'node:url';

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// // 获取当前文件所在路径
// const __dirname = fileURLToPath(new URL('.', import.meta.url));

// export default defineConfig({
//   plugins: [vue()],
//   base: './'  // 相对路径打包
   
//   },
// });