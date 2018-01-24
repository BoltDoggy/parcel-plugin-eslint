const Debug = require('debug');
const eslint = require('eslint');
const eslintFormatter = require("eslint/lib/formatters/stylish");
const Logger = require('parcel-bundler/src/Logger');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

let ownDebugger = Debug('parcel-plugin-eslint:MyAsset');
let logger = new Logger({});

let engine = new eslint.CLIEngine({
    ignorePattern: '!node_modules/*'
});

ownDebugger('MyAsset');

class MyAsset extends JSAsset {
    async transform() {
        ownDebugger('before parse do eslint.');

        let res = engine.executeOnText(this.contents, this.name, true);
        logger.clear();
        logger.write(eslintFormatter(res.results));

        return await super.transform();
    }
}

module.exports = MyAsset;