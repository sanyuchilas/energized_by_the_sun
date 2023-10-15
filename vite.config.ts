import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import gltf from 'vite-plugin-gltf';
import { textureResize } from '@gltf-transform/functions';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/energized_by_the_sun/',
  plugins: [
    react(),
    gltf({
      transforms: [ textureResize({ size: [ 1024, 1024 ] }) ]
    }) 
  ],
})
