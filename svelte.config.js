const sveltePreprocess = require('svelte-preprocess');

function onwarn(warning, handler) {
    switch(warning.code) {
    case 'a11y-distracting-elements':
    case 'a11y-invalid-attribute':
    case 'a11y-missing-attribute':
        return
    default:
        console.log(warning.code);
        handler(warning);
    }
}

module.exports = {
  onwarn,
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [require('autoprefixer')],
      },
    }),
  ],
};
