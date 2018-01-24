module.exports = function (bundler) {
    bundler.addAssetType('js', require.resolve('./src/EslintAsset.js'));
    // bundler.addPackager('vue', require.resolve('./MyPackager'));
};