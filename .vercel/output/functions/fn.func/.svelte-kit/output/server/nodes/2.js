

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.eb246c28.js","_app/immutable/chunks/scheduler.09a1dfe1.js","_app/immutable/chunks/index.b880ee5b.js","_app/immutable/chunks/stores.41ff9f21.js","_app/immutable/chunks/singletons.d4a68fde.js","_app/immutable/chunks/navigation.04b423f6.js"];
export const stylesheets = ["_app/immutable/assets/2.9867a5e2.css","_app/immutable/assets/navigation.ff02ec2d.css"];
export const fonts = [];
