# node-exec-promise

This package is a simple wrapper for `child_process.exec` and `child_process.execFile` which returns a Promise.

# Installation

```bash
npm install --save node-exec-promise
```

# Example Usage

```javascript
var exec = require('node-exec-promise').exec;

exec('ls -lah /tmp').then(function(stdout) {
  console.log(stdout);
}, function(stderr) {
  console.log(stderr);
});
```

# Example Gulp Usage

```javascript
var execFile = require('node-exec-promise').execFile;

gulp.task('example', function(done) {
  execFile('ls', ['-lah', '/tmp']).then(function(stdout) {
    done();
  }, function(stderr) {
    // handle error
  });
});
```
