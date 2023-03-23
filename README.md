# pnpm-ts5-swc-esm-jest

This POC is a continuation of the [pnpm-ts-swc-esm POC](https://github.com/patricklafrance/pnpm-ts-swc-esm).

For learnings and observations about PNPM, TS 4, SWC, or ESM, have a look at the [README](https://github.com/patricklafrance/pnpm-ts-swc-esm).

## TS v5

Many quirks of TS v4 ESM support are not necessary anymore with TS v5.

The following has been removed from the Webpack Config:

```js
// webpack.config.js

{
    resolve: {
        extensionAlias: {
            ".js": [".ts", ".tsx", ".js"]
        }
    }
}
```

```js
// webpack.config.js

{
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: /node_modules/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    }
}
```

And in the codebase, all the import paths has been updated to use their original file extension of of `.js`.

## @swc/jest with ESM

[Jest documentation](https://jestjs.io/docs/ecmascript-modules) still mark ESM support has being experimental.

However, after trying a basic example in this repository it seem to work perfectly fine.

There are still a few issues but none of them seems to really affect us:

- [ESM official issue](https://github.com/facebook/jest/issues/9430)
- [Issues labeled as ESM](https://github.com/facebook/jest/labels/ES%20Modules)

The only issue seems to be with `@swc/jest` which doesn't pick up the `.swcrc` config file but it can be solved but providing the configuration directly in the Jest `transformer` has explained in this [issue](https://github.com/swc-project/swc-node/issues/635#issuecomment-1070766669).

```js
// jest.config.js

{
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", {
            jsc: {
                transform: {
                    react: {
                    runtime: 'automatic',
                    }
                }
            },
            ...
        }]
    },
}
```

It's also important to add `extensionsToTreatAsEsm` to the Jest config file.

```js
// jest.config.js

{
    extensionsToTreatAsEsm: [".ts", ".tsx"]
}
```
