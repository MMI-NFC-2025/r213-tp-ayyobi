import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { e as getOffresMinSurface } from '../../../chunks/backend_B_PQ7pvs.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_BQgWNtF7.mjs';
import { $ as $$OffreCard } from '../../../chunks/OffreCard_89trpB9e.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$surface = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$surface;
  const { surface } = Astro2.params;
  const minSurface = Number(surface);
  const offres = Number.isFinite(minSurface) ? await getOffresMinSurface(minSurface) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Maisons > ${minSurface} m\xB2` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-2xl font-bold">
Maisons dont la surface est supérieure à ${minSurface} m²
</h2> ${offres.length === 0 ? renderTemplate`<p class="mt-4">Aucune offre trouvée.</p>` : renderTemplate`<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>`}` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/surface/[surface].astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/surface/[surface].astro";
const $$url = "/offres/surface/[surface]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$surface,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
