

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.46276dab.js","_app/immutable/chunks/scheduler.09a1dfe1.js","_app/immutable/chunks/index.b880ee5b.js","_app/immutable/chunks/navigation.9b4ea3e8.js","_app/immutable/chunks/singletons.7c3960c5.js"];
export const stylesheets = ["_app/immutable/assets/3.a8806593.css","_app/immutable/assets/navigation.ff02ec2d.css"];
export const fonts = [];
