module.exports = {
  staticFileGlobs: [
    'www/**.html',
    'www/**.js',
    'www/**.css',
    'www/assets/images/*',
    'www/assets/icons/*'
  ],
  root: 'www',
  stripPrefix: 'www/',
  navigateFallback: '/index.html'
};