export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/jetbrains-mono-v18-latin-300.woff","fonts/jetbrains-mono-v18-latin-300.woff2","fonts/jetbrains-mono-v18-latin-500.woff","fonts/jetbrains-mono-v18-latin-500.woff2","fonts/jetbrains-mono-v18-latin-600.woff","fonts/jetbrains-mono-v18-latin-600.woff2","fonts/jetbrains-mono-v18-latin-700.woff","fonts/jetbrains-mono-v18-latin-700.woff2","fonts/jetbrains-mono-v18-latin-regular.woff","fonts/jetbrains-mono-v18-latin-regular.woff2","fonts/space-grotesk-v15-latin-300.woff","fonts/space-grotesk-v15-latin-300.woff2","fonts/space-grotesk-v15-latin-500.woff","fonts/space-grotesk-v15-latin-500.woff2","fonts/space-grotesk-v15-latin-600.woff","fonts/space-grotesk-v15-latin-600.woff2","fonts/space-grotesk-v15-latin-700.woff","fonts/space-grotesk-v15-latin-700.woff2","fonts/space-grotesk-v15-latin-regular.woff","fonts/space-grotesk-v15-latin-regular.woff2","icons/about.svg","icons/discord.svg","icons/dk-removebg.png","icons/dk.jpeg","icons/dk.png","icons/email.svg","icons/fork.svg","icons/geeksforgeeks.svg","icons/github.svg","icons/home.svg","icons/jpmc-transparent.png","icons/jpmc.png","icons/kofi.svg","icons/leetcode.svg","icons/open.svg","icons/pic4.gif","icons/png-jpmc.png","icons/profile.jpeg","icons/star.svg","icons/work.svg","logo.ico","pic1.gif","pic2.gif","pic3.gif","purple.gif","question_mark.png","sounds/click.ogg"]),
	mimeTypes: {".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml",".png":"image/png",".jpeg":"image/jpeg",".gif":"image/gif",".ogg":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.722f83f1.js","app":"_app/immutable/entry/app.b9db9708.js","imports":["_app/immutable/entry/start.722f83f1.js","_app/immutable/chunks/scheduler.09a1dfe1.js","_app/immutable/chunks/singletons.d4a68fde.js","_app/immutable/entry/app.b9db9708.js","_app/immutable/chunks/scheduler.09a1dfe1.js","_app/immutable/chunks/index.b880ee5b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
