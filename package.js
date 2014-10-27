Package.describe({
  name: 'harrison:papa-parse',
  summary: 'A powerful, in-browser CSV parser for big boys and girls',
  version: '1.0.1',
  git: 'https://github.com/harrisonhunter/papa-parse-meteor.git'
});

Package.onUse(function(api) {
  api.addFiles('harrison:papa-parse.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('harrison:papa-parse');
  api.addFiles('harrison:papa-parse-tests.js', 'client');
});
