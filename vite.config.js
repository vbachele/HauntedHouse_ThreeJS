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
                // hauntedHouse: 'src/Experience/haunted-house.html',
                css: 'src/Experience/style.css',
            }
       },
    }
}