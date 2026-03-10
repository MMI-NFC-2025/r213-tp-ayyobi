import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { c as getOffresBetweenPrix } from '../../../../chunks/backend_B_PQ7pvs.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_BQgWNtF7.mjs';
import { $ as $$OffreCard } from '../../../../chunks/OffreCard_89trpB9e.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$max = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$max;
  const { min, max } = Astro2.params;
  const minPrix = Number(min);
  const maxPrix = Number(max);
  const offres = Number.isFinite(minPrix) && Number.isFinite(maxPrix) ? await getOffresBetweenPrix(minPrix, maxPrix) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Maisons entre ${minPrix}\u20AC et ${maxPrix}\u20AC` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-6xl mx-auto px-4 py-8"> <h2 class="text-2xl font-bold">Maisons entre ${minPrix} € et ${maxPrix} €</h2> ${offres.length === 0 ? renderTemplate`<p class="mt-4">Aucune offre trouvée.</p>` : renderTemplate`<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>`} </section> ` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/prix/[min]/[max].astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/prix/[min]/[max].astro";
const $$url = "/offres/prix/[min]/[max]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$max,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
