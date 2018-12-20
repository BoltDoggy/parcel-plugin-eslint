const logger = require('@parcel/logger');
const mkdirp = require('mkdirp');
const jsonfile = require('jsonfile');
const constFile = require('./src/const');

mkdirp.sync(constFile.cacheDir);

module.exports = function (bundler) {
    jsonfile.writeFileSync(constFile.cacheFile, {});

    bundler.addAssetType('js', require.resolve('./src/EslintAsset.js'));
    // bundler.addPackager('vue', require.resolve('./MyPackager'));

    bundler.on('bundled', () => {
        let cache;
        try {
            cache = jsonfile.readFileSync(constFile.cacheFile);
        } catch (e) {
            cache = {};
        }
        cache.log = cache.log || [];
        if (cache.log.length) {
            logger.clear();
        }
        cache.log.forEach(element => {
            logger.write(element);
        });
        
        jsonfile.writeFileSync(constFile.cacheFile, {});
    });
};
