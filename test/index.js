const Bundler = require('parcel-bundler');
const PluginEslint = require('../index');

let bundler = new Bundler('./examples/index.html', {
    watch: true
});

PluginEslint(bundler);

bundler.serve();