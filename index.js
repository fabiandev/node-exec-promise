var child_process = require('child_process');

function execute(command) {
  return new Promise(function(resolve, reject) {
    doExecute(resolve, reject, command)
  });
}

function executeFile(file, options) {
  return new Promise(function(resolve, reject) {
    doExecuteFile(resolve, reject, file, options)
  });
}

function doExecute(resolve, reject, command) {
  child_process.exec(command, function(error, stdout, stderr){
  	if (error) {
      return reject(error);
    }

    resolve({ stdout, stderr });
  });
}

function doExecuteFile(resolve, reject, file, options) {
  child_process.execFile(file, options, function(error, stdout, stderr){
  	if (error) {
      return reject(error);
    }

    resolve({ stdout, stderr });
  });
}

module.exports = {
  exec: execute,
  execFile: executeFile
};
