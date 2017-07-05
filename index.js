var cp = require('child_process');

function exec(command) {
  return new Promise(function(resolve, reject) {
    cp.exec(command, function(error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      resolve({stdout, stderr});
    });
  });
}

function execFile(file, options) {
  return new Promise(function(resolve, reject) {
    cp.execFile(file, options, function(error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      resolve({stdout, stderr});
    });
  });
}

module.exports = {
  exec,
  execFile
};
