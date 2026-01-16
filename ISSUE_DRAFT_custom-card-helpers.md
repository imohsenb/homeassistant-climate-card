# Issue for custom-cards/custom-card-helpers

## Title
Build tools incorrectly listed as runtime dependencies causing 77MB bloat

## Description

### Problem
The `custom-card-helpers@1.9.0` package includes build tools as runtime dependencies, resulting in **77MB of unnecessary bloat** for consumers of the package.

### Root Cause
In `package.json`, the following build tools are listed under `dependencies` instead of `devDependencies`:
- `typescript@^4.5.4` (~64MB)
- `rollup@^2.63.0` (~6.2MB)

These tools are only needed during the build process of custom-card-helpers itself, not by consumers of the package.

### Impact
When projects install `custom-card-helpers`, they receive:
```
custom-card-helpers: 77MB total
├── node_modules: 74MB
│   ├── typescript: 64MB ❌ (build tool)
│   ├── rollup: 6.2MB ❌ (build tool)
│   ├── lit: 235KB (duplicate)
│   └── home-assistant-js-websocket: 180KB (duplicate)
└── actual library code: 3MB
```

### Consequences
1. **Slow installs**: 77MB extra download time
2. **Duplicate dependencies**: Projects using modern versions of lit/rollup/typescript get duplicate copies
3. **Deprecated warnings**: `@formatjs/intl-utils@3.8.4` is deprecated
4. **Large CI/CD artifacts**: Unnecessary bandwidth and storage costs
5. **Outdated dependencies**: lit@2.x when lit@3.x is current

### Reproduction
```bash
npm install custom-card-helpers@1.9.0
du -sh node_modules/custom-card-helpers
# Output: 77M
du -sh node_modules/custom-card-helpers/node_modules/typescript
# Output: 64M
```

### Proposed Solution

**1. Move build tools to devDependencies**
```diff
{
  "dependencies": {
    "@formatjs/intl-utils": "^3.8.4",
    "home-assistant-js-websocket": "^6.0.1",
    "intl-messageformat": "^9.11.1",
    "lit": "^2.1.1",
-   "rollup": "^2.63.0",
    "superstruct": "^0.15.3",
-   "typescript": "^4.5.4"
  },
  "devDependencies": {
+   "rollup": "^2.63.0",
+   "typescript": "^4.5.4",
    "microbundle": "^0.14.2",
    "typedoc": "^0.22.10"
  }
}
```

**2. Update outdated dependencies**
- Replace deprecated `@formatjs/intl-utils` with `@formatjs/ecma-abstract`
- Update `lit` to `^3.x` for current version support
- Update `home-assistant-js-websocket` to `^9.x` for compatibility

**3. Add `files` field to package.json**
Ensure only necessary files are published:
```json
{
  "files": [
    "dist",
    "src",
    "README.md",
    "LICENSE"
  ]
}
```

### Size Comparison
- **Before**: 77MB
- **After**: ~3MB (96% reduction)

### Tested Workaround
For projects affected by this issue, we've successfully implemented local type definitions and utility functions as a replacement. See our implementation for reference: https://github.com/zlatohlavekj/homeassistant-climate-card/blob/claude/audit-dependencies-mkgvm1zow6o5oubu-NOCG7/src/ha-helpers.ts

This reduced our project's `node_modules` from 93MB to 42MB (55% reduction).

### Environment
- custom-card-helpers version: 1.9.0
- npm version: 10.9.4
- Node.js version: 18.0.0+

### Additional Notes
This package appears to be the last major bloat contributor in Home Assistant custom card development. Fixing this would benefit the entire custom card ecosystem.

Thank you for maintaining this helpful library!
