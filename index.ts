import * as cp from 'child_process';

export function exec(command: string): Promise<{ stdout: string; stderr: string }> {
  return new Promise(function(resolve, reject) {
    cp.exec(command, function(error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      resolve({stdout, stderr});
    });
  });
}

export function execFile(file: string, options?: string[]): Promise<{ stdout: string; stderr: string }> {
  return new Promise(function(resolve, reject) {
    cp.execFile(file, options, function(error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      resolve({stdout, stderr});
    });
  });
}
