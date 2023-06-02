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
        sourcemap: true,
        rollupOptions: {
            input: {
              index: fileURLToPath(new URL('src/index.html', import.meta.url)),
              index2: fileURLToPath(new URL('src/index2.html', import.meta.url)),
            }
       }
    }
}