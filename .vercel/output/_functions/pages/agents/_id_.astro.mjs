import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BQgWNtF7.mjs';
import { $ as $$OffreCard } from '../../chunks/OffreCard_89trpB9e.mjs';
import { g as getAgents, a as getOffresByAgent } from '../../chunks/backend_B_PQ7pvs.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const agents = await getAgents();
  const agent = agents.find((a) => a.id === id);
  if (!agent) {
    return Astro2.redirect("/agents");
  }
  const offres = await getOffresByAgent(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Offres de ${agent.prenom} ${agent.nom}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl mb-6">
Offres de ${agent.prenom} ${agent.nom} </h1> ${offres.length === 0 ? renderTemplate`<p>Aucune offre pour cet agent.</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "Card", $$OffreCard, { "offre": offre })}`)} </div>`}` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/agents/[id].astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/agents/[id].astro";
const $$url = "/agents/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
