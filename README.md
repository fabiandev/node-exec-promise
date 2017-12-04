# node-exec-promise

# Installation

```bash
npm install --save node-exec-promise
```

# Examples

All examples can be used with both, `exec` and `execFile`.

## TypeScript Usage Example

```ts
import { exec, execFile } from 'node-exec-promise';

exec('ls -lah /tmp').then(out => {
  console.log(out.stdout, out.stderr);
}, err => {
  console.error(err);
});

execFile('ls', ['-lah', '/tmp']).then(out => {
  console.log(out.stdout, out.stderr);
}, err => {
  console.error(err);
});
```

## JavaScript Usage Example

```js
var exec = require('node-exec-promise').exec;

exec('ls -lah /tmp').then(function(out) {
  console.log(out.stdout, out.stderr);
}, function(err) {
  console.error(err);
});
```

## Gulp Usage Example

```js
var execFile = require('node-exec-promise').execFile;

gulp.task('example', function(done) {
  execFile('ls', ['-lah', '/tmp']).then(function(out) {
    done();
  }, function(err) {
    // handle error
  });
});
```

# Build

```sh
$ git clone https://github.com/fabiandev/node-exec-promise.git
$ cd node-exec-promise
$ yarn && yarn build
```
