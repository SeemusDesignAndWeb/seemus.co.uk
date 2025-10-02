

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CGKHTMbU.js","_app/immutable/chunks/disclose-version.CZgVfknA.js","_app/immutable/chunks/runtime.Bj1wGOs6.js"];
export const stylesheets = ["_app/immutable/assets/0.BdyRDRTx.css"];
export const fonts = [];
