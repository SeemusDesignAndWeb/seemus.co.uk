export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.C07_auqD.js","app":"_app/immutable/entry/app.Dv-RzvwA.js","imports":["_app/immutable/entry/start.C07_auqD.js","_app/immutable/chunks/entry.DIGoxS0X.js","_app/immutable/chunks/runtime.Bj1wGOs6.js","_app/immutable/entry/app.Dv-RzvwA.js","_app/immutable/chunks/runtime.Bj1wGOs6.js","_app/immutable/chunks/store.ehoEGTMC.js","_app/immutable/chunks/disclose-version.CZgVfknA.js","_app/immutable/chunks/props.tmw_EDSu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
