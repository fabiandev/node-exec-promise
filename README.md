# node-exec-promise

# Installation

```bash
npm install --save node-exec-promise
```

# Example Usage

```js
var exec = require('node-exec-promise').exec;

exec('ls -lah /tmp').then(function(out) {
  console.log(out.stdout, out.stderr);
}, function(err) {
  console.error(err);
});
```

# Example Gulp Usage

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
