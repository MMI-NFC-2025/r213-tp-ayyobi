import { c as createComponent, a as createAstro, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BQgWNtF7.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_89trpB9e.mjs';
import { b as addOffre, h as getOffres, c as getOffresBetweenPrix } from '../chunks/backend_B_PQ7pvs.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let offres = [];
  let message = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    if (data.get("nom_maison")) {
      const response = await addOffre(data);
      message = response.message;
      offres = await getOffres();
    } else {
      const minPrix = parseInt(data.get("minPrix"));
      const maxPrix = parseInt(data.get("maxPrix"));
      if (minPrix > 0 && maxPrix > 0 && maxPrix > minPrix) {
        offres = await getOffresBetweenPrix(minPrix, maxPrix);
        if (offres.length === 0) {
          message = `Pas d'offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`;
        } else {
          message = `Liste des offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`;
        }
      } else {
        message = "Veuillez entrer des valeurs valides pour le prix.";
        offres = await getOffres();
      }
    }
  } else {
    offres = await getOffres();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Offres" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold">Offres</h1> <form action="/offres" method="POST" class="mt-4 flex flex-wrap gap-2 items-center"> <input type="number" name="minPrix" placeholder="Prix minimum" class="p-2 border rounded"> <input type="number" name="maxPrix" placeholder="Prix maximum" class="p-2 border rounded"> <input type="submit" value="Filtrer par prix" class="rounded-full px-5 py-2 text-sm font-semibold shadow-sm cursor-pointer"> </form>  <h2 class="text-xl font-semibold mt-6">Ajouter une maison</h2> <form action="/offres" method="POST" enctype="multipart/form-data" class="mt-4 space-y-3"> <input type="text" name="nom_maison" placeholder="Nom de la maison" required class="w-full p-2 border rounded"> <div class="relative"> <input type="number" name="prix" placeholder="Prix" required class="w-full p-2 border rounded pr-10"> <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span> </div> <input type="number" name="nb_chambres" placeholder="Nombre de chambres" class="w-full p-2 border rounded"> <input type="number" name="nb_sdb" placeholder="Nombre de salles de bain" class="w-full p-2 border rounded"> <div class="relative"> <input type="number" name="surface" placeholder="Surface" class="w-full p-2 border rounded pr-10"> <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">m²</span> </div> <input type="text" name="adresse" placeholder="Adresse" class="w-full p-2 border rounded"> <input type="file" name="images" accept="image/*" class="w-full p-2 border rounded bg-white"> <button type="submit" class="px-4 py-2 bg-black text-white rounded">
Ajouter
</button> </form> ${message && renderTemplate`<p class="mt-3 p-2 border rounded">${message}</p>`}<div class="flex gap-4 flex-wrap"> <a id="favori-button" class="rounded-full px-5 py-2 text-sm font-semibold shadow-sm mt-6 inline-block" href="javascript:void(0)">
Afficher les favoris
</a> <a href="/offres/surface/80" class="rounded-full px-5 py-2 text-sm font-semibold shadow-sm mt-6 inline-block">
Voir les maisons de plus de 80 m²
</a> <a href="/offres/prix/250000" class="rounded-full px-5 py-2 text-sm font-semibold shadow-sm mt-6 inline-block">
Moins de 250k
</a> <a href="/offres/prix/200000/300000" class="rounded-full px-5 py-2 text-sm font-semibold shadow-sm mt-6 inline-block">
200k → 300k
</a> </div> <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${offres.map((offre) => renderTemplate`<div class="offre"${addAttribute(offre.favori?.toString(), "data-favori")}> ${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })} </div>`)} </div> ` })} ${renderScript($$result, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
