# karma-webpack-wc-bug

This shows a "bug" within karma-webpack when used with global variabels / e.g. custom elements registry.

Each test file get's bundled individually but placed in a single browser window.

## What happens
1. **foo-one has a test file**
1. load bundle one
1. foo-one gets registered
1. all good
1. **foo-two has a test file**
1. load bundle two
1. has a has a dependency on foo-one
1. foo one is included (again) in bundle (as bundles are created in isolation)
1. => ERROR ` Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry`

## Steps to Reproduce
```
npm install
npm run test
```

## possible Solutions

These are mere ideas to spark a conversation:

### 1) manually create a single entry point
Besides the *.test.js files have also an index.js

**Good**
- easily doable
- no change in karma-webpack needed

**Bad**
- can't load individual test files
- cumbersome => need to add file + add to index.js
- not really sadisfying Developer Experience

### 2) treat it as "Multi Page Application"
Use https://webpack.js.org/concepts/entry-points/#multi-page-application to create bundles that know of each other.
E.g. do not create bundles in isolation.

**Good**
- easy
- can load individual test files
- just "works" and therfore sadisfying Developer Experience
- smaller test bundles

**Bad**
- change in karma-webpack needed
