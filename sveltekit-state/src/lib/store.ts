import { writable } from 'svelte/store';

export const foo = writable<string>('initial state value');