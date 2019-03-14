# webpack weirdness

This is a demonstration of some unexpected Webpack behavior, related to SplitChunks plugin and ModuleConcatenation plugin. I'm not yet sute if it's a bug, but it sure seems like it.

## Install

```
git clone git@github.com:mxmul/webpack_weirdness_repro.git
cd webpack_weirdness_repro
yarn
```

## Build

```
yarn build
```

## Reproduce

```
yarn serve
```

When you visit http://localhost:5000, you will see this error in the JS console:
```
Uncaught TypeError: Cannot read property 'call' of undefined
    at __webpack_require__ (runtime~main.js:79)
    at checkDeferredModules (runtime~main.js:46)
    at Array.webpackJsonpCallback [as push] (runtime~main.js:33)
    at main.js:1
```

???
