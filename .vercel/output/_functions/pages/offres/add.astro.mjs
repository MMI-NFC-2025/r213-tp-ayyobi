import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_CelwlfsV.mjs';
import { b as addOffre } from '../../chunks/backend_B_PQ7pvs.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addOffre(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Ajouter une offre" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold">Ajouter une maison</h1> ${message && renderTemplate`<p class="mt-3 p-2 border rounded">${message}</p>`}<form action="/offres/add" method="POST" enctype="multipart/form-data" class="mt-4 space-y-3"> <input type="text" name="nom_maison" placeholder="Nom de la maison" required class="w-full p-2 border rounded"> <div class="relative"> <input type="number" name="prix" placeholder="Prix" required class="w-full p-2 border rounded pr-10"> <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span> </div> <input type="number" name="nb_chambres" placeholder="Nombre de chambres" class="w-full p-2 border rounded"> <input type="number" name="nb_sdb" placeholder="Nombre de salles de bain" class="w-full p-2 border rounded"> <div class="relative"> <input type="number" name="surface" placeholder="Surface" class="w-full p-2 border rounded pr-10"> <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">m²</span> </div> <input type="text" name="adresse" placeholder="Adresse" class="w-full p-2 border rounded"> <input type="file" name="images" accept="image/*" class="w-full p-2 border rounded bg-white"> <button type="submit" class="px-4 py-2 bg-black text-white rounded">
Ajouter
</button> </form> ` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
