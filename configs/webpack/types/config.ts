export enum BuildMode {
    production = 'production',
    development = 'development',
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}