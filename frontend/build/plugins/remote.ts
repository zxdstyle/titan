import { Plugin } from 'vite';

export default function RemoteModule(): Plugin {
    return {
        name: 'vite-plugin-remote-module',
        config: config => {
            return {
                build: {},
            };
        },
    };
}
