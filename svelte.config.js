const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess(),
  adapter: '@sveltejs/adapter-node',
};
