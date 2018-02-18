# parcel-plugin-eslint [![npm](https://img.shields.io/npm/v/parcel-plugin-eslint.svg)](https://www.npmjs.com/package/parcel-plugin-eslint) [![david-dm](https://david-dm.org/BoltDoggy/parcel-plugin-eslint.svg)](https://david-dm.org/BoltDoggy/parcel-plugin-eslint)

> Stability: 1 - Experimental This feature is still under active development and subject to non-backwards compatible changes, or even removal, in any future version. Use of the feature is not recommended in production environments.

<img src="http://img.souche.com/f2e/3a1e03cd7e9bbb748270de9a84db26f3.png" align="right" width="140">

__Make Parcel support ESlint.__

[【What's the Parcel】](https://parceljs.org/)[【What's the ESlint】](https://eslint.org/)

## Using Plugin

> Using plugins in Parcel could not be any simpler. All you need to do is install them and save in your package.json. Plugins should be named with the prefix parcel-plugin-, e.g. parcel-plugin-foo. Any dependencies listed in package.json with this prefix will be automatically loaded during initialization.

You must `node >= 8`

```
npm i parcel-plugin-eslint -D
```

## Examples

* [default](https://github.com/lc60005457/parcel-vue-demo) - Maybe you like [parcel-plugin-vue](https://github.com/lc60005457/parcel-plugin-vue)

## Make some issues clear

### You Should install parcel-bundler yourself

The plugins for parcel-bundler need a same version of parcel-bundler at runtime.

### You Should install eslint yourself

You can choose the version of Eslint yourself.
