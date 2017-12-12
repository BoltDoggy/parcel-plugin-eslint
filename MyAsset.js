const Debug = require('debug');
const eslint = require('eslint');
const eslintFormatter = require("eslint/lib/formatters/stylish");
const { Asset } = require('parcel-bundler');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

let ownDebugger = Debug('parcel-plugin-eslint:MyAsset');

let engine = new eslint.CLIEngine({
    ignorePattern: '!node_modules/*'
});

ownDebugger('MyAsset');

class MyAsset extends JSAsset {
    async parse(code) {
        ownDebugger('before parse do eslint.');

        let res = engine.executeOnText(code, this.name, true);
        eslintFormatter(res.results);

        return await super.parse(code);
    }
}

module.exports = MyAsset;
