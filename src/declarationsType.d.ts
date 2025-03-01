declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
    import React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module 'eslint-plugin-react-hooks' {
    import type { ESLint } from 'eslint';
    const plugin: Omit<ESLint.Plugin, 'configs'> & {
        // eslint-plugin-react-hooks does not use FlatConfig yet
        configs: Record<string, ESLint.ConfigData>;
    };
    export default plugin;
}
