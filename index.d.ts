export declare function exec(command: string): Promise<Standard>;
export declare function execFile(file: string, options?: string[]): Promise<Standard>;
export declare class Standard {
    out: string;
    err: string;
    constructor(out: string, err: string);
}
