

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3791dda6.js","_app/immutable/chunks/scheduler.09a1dfe1.js","_app/immutable/chunks/index.b880ee5b.js","_app/immutable/chunks/stores.725eaa11.js","_app/immutable/chunks/singletons.7c3960c5.js","_app/immutable/chunks/navigation.9b4ea3e8.js"];
export const stylesheets = ["_app/immutable/assets/2.9867a5e2.css","_app/immutable/assets/navigation.ff02ec2d.css"];
export const fonts = [];
