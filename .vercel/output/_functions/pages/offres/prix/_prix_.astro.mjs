import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { d as getOffresMaxPrix } from '../../../chunks/backend_B_PQ7pvs.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CelwlfsV.mjs';
import { $ as $$OffreCard } from '../../../chunks/OffreCard_Be51O0v0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$prix = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$prix;
  const { prix } = Astro2.params;
  const maxPrix = Number(prix);
  const offres = Number.isFinite(maxPrix) ? await getOffresMaxPrix(maxPrix) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Maisons < ${maxPrix} \u20AC` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-6xl mx-auto px-4 py-8"> <h2 class="text-2xl font-bold">
Maisons dont le prix est inférieur à ${maxPrix} €
</h2> ${offres.length === 0 ? renderTemplate`<p class="mt-4">Aucune offre trouvée.</p>` : renderTemplate`<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>`} </section> ` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/prix/[prix].astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/prix/[prix].astro";
const $$url = "/offres/prix/[prix]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$prix,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
