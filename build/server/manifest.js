const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.e4cvhIhg.js","app":"_app/immutable/entry/app.CYaCH9J7.js","imports":["_app/immutable/entry/start.e4cvhIhg.js","_app/immutable/chunks/entry.CtbD8SGx.js","_app/immutable/chunks/runtime.Bj1wGOs6.js","_app/immutable/entry/app.CYaCH9J7.js","_app/immutable/chunks/runtime.Bj1wGOs6.js","_app/immutable/chunks/store.ehoEGTMC.js","_app/immutable/chunks/disclose-version.CZgVfknA.js","_app/immutable/chunks/props.tmw_EDSu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DBTls8aP.js')),
			__memo(() => import('./chunks/1-DG7SGJ6Y.js')),
			__memo(() => import('./chunks/2-DJpx9IVf.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
