

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1aa8ca49.js","_app/immutable/chunks/scheduler.09a1dfe1.js","_app/immutable/chunks/index.b880ee5b.js","_app/immutable/chunks/stores.41ff9f21.js","_app/immutable/chunks/singletons.d4a68fde.js"];
export const stylesheets = ["_app/immutable/assets/1.cf8ae120.css"];
export const fonts = [];
