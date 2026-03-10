import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_jpqc0e91.mjs';
import { manifest } from './manifest_DvlI_W6A.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agents/_id_.astro.mjs');
const _page2 = () => import('./pages/agents.astro.mjs');
const _page3 = () => import('./pages/api/setfavori.astro.mjs');
const _page4 = () => import('./pages/offres/add.astro.mjs');
const _page5 = () => import('./pages/offres/prix/_min_/_max_.astro.mjs');
const _page6 = () => import('./pages/offres/prix/_prix_.astro.mjs');
const _page7 = () => import('./pages/offres/surface/_surface_.astro.mjs');
const _page8 = () => import('./pages/offres/_id_.astro.mjs');
const _page9 = () => import('./pages/offres.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agents/[id].astro", _page1],
    ["src/pages/agents/index.astro", _page2],
    ["src/pages/api/setFavori.js", _page3],
    ["src/pages/offres/add.astro", _page4],
    ["src/pages/offres/prix/[min]/[max].astro", _page5],
    ["src/pages/offres/prix/[prix].astro", _page6],
    ["src/pages/offres/surface/[surface].astro", _page7],
    ["src/pages/offres/[id].astro", _page8],
    ["src/pages/offres/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ed7f324d-5844-48e2-8e42-b92a7ed928f1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
