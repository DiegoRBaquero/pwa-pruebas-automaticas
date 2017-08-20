module.exports = {
  staticFileGlobs: [
    'styles/**.css',
    '**.html',
    'images/**.*',
    'scripts/**.js'
  ],
  runtimeCaching: [{
    urlPattern: /^https:\/\/api-ratp\.pierre-grimaud\.fr/,
    handler: 'cacheFirst'
  }]
};