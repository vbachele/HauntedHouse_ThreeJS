const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
import { fileURLToPath } from 'url'
 

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        rollupOptions: {
            input: {
              index: fileURLToPath(new URL('src/index.html', import.meta.url)),
              'index-d5d0bf12': fileURLToPath(new URL('src/index.html', import.meta.url)),
              hauntedHouse: fileURLToPath(new URL('src/haunted-house.html', import.meta.url)),
              script: fileURLToPath(new URL('src/script.js', import.meta.url)),
            }
       }
    }
}