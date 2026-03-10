import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, e as renderScript, b as renderTemplate } from './astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { $ as $$PbImage } from './PbImage_D8iCEeEJ.mjs';

const $$Astro = createAstro();
const $$OffreCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OffreCard;
  const { offre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition"> <div class="h-48 overflow-hidden bg-slate-100 relative"> ${renderComponent($$result, "PbImage", $$PbImage, { "record": offre, "recordImage": offre.images })} <div class="absolute top-3 right-3 p-2 bg-black bg-opacity-60 text-white rounded-lg"> <img id="favorite-icon"${addAttribute(offre.favori ? "/favorite_filled.svg" : "/favorite.svg", "src")} alt="Favorite Icon" class="w-6 h-6"> </div> </div> <div class="p-4"> <h2 class="text-lg font-bold mb-2 text-gray-900 line-clamp-2"> ${offre.nom_maison} </h2> <div class="space-y-1 mb-4 text-sm text-gray-700"> <p> <strong>Prix:</strong> ${offre.prix?.toLocaleString("fr-FR") || offre.prix} €
</p> <p><strong>Surface:</strong> ${offre.surface} m²</p> <p><strong>Adresse:</strong> ${offre.adresse}</p> </div> <div class="flex gap-2"> <a${addAttribute(`/offres/${offre.id}`, "href")} class="flex-1 text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
Voir plus
</a> <button${addAttribute(`favoriteButton px-3 py-2 rounded-lg font-semibold text-sm border transition cursor-pointer ${offre.favori ? "bg-yellow-100 text-yellow-800 border-yellow-300" : "bg-gray-100 text-gray-700 border-gray-300"}`, "class")} data-favorite-label${addAttribute(JSON.stringify(offre), "data-offre")} type="button"> ${offre.favori ? "\u2B50 Favori" : "\u2606 Ajouter"} </button> </div> </div> </article> ${renderScript($$result, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/components/OffreCard.astro", void 0);

export { $$OffreCard as $ };
