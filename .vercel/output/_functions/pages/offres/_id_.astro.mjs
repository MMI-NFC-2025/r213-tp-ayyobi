import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { f as getOffre } from '../../chunks/backend_B_PQ7pvs.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BQgWNtF7.mjs';
import { $ as $$PbImage } from '../../chunks/PbImage_D8iCEeEJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offre = await getOffre(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": offre.nom_maison }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="h-64 md:h-96 overflow-hidden rounded-xl bg-slate-100 mb-6"> ${renderComponent($$result2, "PbImage", $$PbImage, { "record": offre, "recordImage": offre.images })} </div> <h2 class="text-2xl font-bold mb-4">${offre.nom_maison}</h2> <ul class="space-y-2 text-lg"> <li><strong>Adresse :</strong> ${offre.adresse}</li> <li><strong>Chambres :</strong> ${offre.nb_chambres}</li> <li><strong>Salles de bain :</strong> ${offre.nb_sdb}</li> <li><strong>Surface :</strong> ${offre.surface} m²</li> <li><strong>Prix :</strong> ${offre.prix} €</li> </ul> </div> ` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/[id].astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/[id].astro";
const $$url = "/offres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
