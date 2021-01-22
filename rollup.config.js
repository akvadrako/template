require('dotenv').config();

const { getRollupConfig } = require('@elderjs/elderjs');
const svelteConfig = require('./svelte.config');

const scss = require('rollup-plugin-scss');
const copy = require('rollup-plugin-copy');

const watch = {
    chokidar: {
        usePolling: true,
        interval: 100,
    }
}

const configs = getRollupConfig({ svelteConfig })

configs.push({
    input: 'src/style/global.scss',
    output: {
       file: 'data/www/style.js',
    },
//    watch,
    plugins: [
        scss({
            watch: 'src/style',
        }),
        copy({
            targets: [
                { src: 'src/assets/*', dest: 'data/www/' }
            ]
        })
    ]
});

module.exports = configs
