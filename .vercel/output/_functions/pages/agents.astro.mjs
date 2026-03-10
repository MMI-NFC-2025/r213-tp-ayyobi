import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BQgWNtF7.mjs';
import { g as getAgents } from '../chunks/backend_B_PQ7pvs.mjs';
import { $ as $$PbImage } from '../chunks/PbImage_D8iCEeEJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const agents = await getAgents();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Liste des agents" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl mb-6">Liste des agents</h1> ${agents.length === 0 ? renderTemplate`<p>
Aucun agent disponible. Vérifiez que PocketBase est lancé et que la
        collection "agent" contient des enregistrements.
</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${agents.map((agent) => renderTemplate`<article class="rounded-lg p-4 shadow-sm relative bg-white"> ${agent.image && renderTemplate`<div class="h-44 sm:h-48 overflow-hidden rounded-xl bg-slate-100 mb-4"> ${renderComponent($$result2, "PbImage", $$PbImage, { "record": agent, "recordImage": agent.image })} </div>`} <h2 class="text-lg font-semibold mb-2"> ${agent.prenom} ${agent.nom} </h2> <a${addAttribute(`/agents/${agent.id}`, "href")} class="mt-2 px-5 py-1 text-sm font-semibold shadow-sm rounded-lg border inline-block">
Voir les offres
</a> </article>`)} </div>`}` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/agents/index.astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/agents/index.astro";
const $$url = "/agents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
