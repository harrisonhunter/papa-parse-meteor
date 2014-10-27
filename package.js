Package.describe({
  name: 'harrison:papa-parse',
  summary: 'A powerful, in-browser CSV parser for big boys and girls',
  version: '1.0.3',
  git: 'https://github.com/harrisonhunter/papa-parse-meteor.git',
});

Package.on_use(function(api) {
  api.export('Papa', 'client');
  api.addFiles('papa-parse.js', 'client');
});

Package.on_test(function(api) {
  api.use('tinytest');
  api.use('papa-parse');
  api.addFiles('papa-parse-tests.js', 'client');
});
