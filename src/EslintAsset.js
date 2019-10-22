const Debug = require('debug');
const eslint = require('eslint');
const eslintFormatter = require("eslint-friendly-formatter");
const jsonfile = require('jsonfile');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const constFile = require('./const');

let ownDebugger = Debug('parcel-plugin-eslint:MyAsset');

let engine = new eslint.CLIEngine({
    ignorePattern: "**/node_modules/**"
});

ownDebugger('MyAsset');

class MyAsset extends JSAsset {
    async load() {
        ownDebugger('before parse do eslint.');

        let code = await super.load();

        if (!engine.isPathIgnored(this.name)) {
            let res = engine.executeOnText(code, this.name, true);
            let ret = eslintFormatter(res.results);

            if (ret) {
                let cache;
                try {
                    cache = jsonfile.readFileSync(constFile.cacheFile);
                } catch (e) {
                    cache = {};
                }
                cache.log = cache.log || [];
                cache.log.push(ret);
                jsonfile.writeFileSync(constFile.cacheFile, cache);
            }
        }
        return code;
    }
}

module.exports = MyAsset;