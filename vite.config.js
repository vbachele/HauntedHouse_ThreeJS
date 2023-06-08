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
                index: 'src/index.html',
            //    'index-058b17f4.js': fileURLToPath(new URL('src/index.html', import.meta.url)),
                hauntedHouse: 'src/haunted-house/haunted-house.html',
                css: 'src/style.css',
            }
       },
    }
}