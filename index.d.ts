export declare function exec(command: string, options: ExecOptions): Promise<{ stdout: string; stderr: string }>;
export declare function execFile(file: string, options?: string[]): Promise<{ stdout: string; stderr: string }>;
