# Mozilla Network Security Services

64 bit versions of [nss](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS) tools precompiled for Mac & Linux.

## Installation

```
$ npm install @achingbrain/nss
```

## Usage

```javascript
const nss = require('@achingbrain/nss')
const execFile = require('child_process').execFile
const PROFILE_DIR = '/some/path'

// Promises
nss()
.then(paths => {
  execFile(paths.certutil, ['-L', '-d', PROFILE_DIR], (error, result) => {
    // ...
  })
})

// Callbacks
nss((error, paths) => {
  if (error) {
    // handle error
  }

  execFile(paths.certutil, ['-L', '-d', PROFILE_DIR], (error, result) => {
    // ...
  })
})
```

# Building new versions

  1. Download a version of nss from [Mozilla's download server](https://ftp.mozilla.org/pub/mozilla.org/security/nss/releases/) (choose one bundled with nspr)
  2. Run:
        ```
        $ tar -xzf nss-X.XX-with-nspr.tar.gz
        $ cd nss
        $ BUILD_OPT=1 USE_64=1 make nss_build_all
        ```
  3. Look in `dist` for compiled files
