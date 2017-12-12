module.exports = function (bundler) {
    bundler.addAssetType('js', require.resolve('./MyAsset'));
    // bundler.addPackager('vue', require.resolve('./MyPackager'));
};