

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b1e1b1cc.js","_app/immutable/chunks/scheduler.09a1dfe1.js","_app/immutable/chunks/index.b880ee5b.js","_app/immutable/chunks/stores.725eaa11.js","_app/immutable/chunks/singletons.7c3960c5.js"];
export const stylesheets = ["_app/immutable/assets/1.cf8ae120.css"];
export const fonts = [];
