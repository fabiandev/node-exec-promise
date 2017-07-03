# nexecp (node-exec-promise fork)

**This is a fork from [node-exec-promise](https://www.npmjs.com/package/node-exec-promise)**.

Why a fork? Two reasons:
- the original does *not* resolve `stderr`, which I need! (`git pull` outputs both to `stdout` and `stderr`).
- on error, it rejects `stderr` instead of the actual Error object.
- well, wait, a 3rd reason! I could have issued a pull request, but since the interface changes, it would most likely break for everyone using a previous version.

This package is a simple wrapper for `child_process.exec` and `child_process.execFile` which returns a Promise.

# Installation

```bash
npm install --save nexecp
```

# Example Usage

```javascript
var exec = require('nexecp').exec;

exec('ls -lah /tmp').then(function(out) {
  console.log(out.stdout, out.stderr);
}, function(err) {
  console.error(err);
});
```

# Example Gulp Usage

```javascript
var execFile = require('node-exec-promise').execFile;

gulp.task('example', function(done) {
  execFile('ls', ['-lah', '/tmp']).then(function(out) {
    console.log(out.stdout, out.stderr);
    done();
  }, function(err) {
    // handle error
  });
});
```
