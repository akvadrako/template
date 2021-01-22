module.exports = {
  origin: '',
  lang: 'en',
  srcDir: 'src',
  distDir: 'data/www',
  rootDir: process.cwd(),
  build: {},
  /*locations: {
    public: './data/www/',
    assets: './data/www/assets/',
    svelte: {
      // trialing slash required
      ssrComponents: './data/ssr/',
      clientComponents: './data/www/widgets/',
    },
    //systemJs: '/assets/s.min.js',
    //intersectionObserverPoly: '/assets/intersection-observer.js',
  },*/
  server: {
    prefix: '',
  },
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncommenting this would disabled writing your files on build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog'],
    },
    '@elderjs/plugin-browser-reload': {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
    },
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
