import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CelwlfsV.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_Be51O0v0.mjs';
import { i as getFavoriteOffres } from '../chunks/backend_B_PQ7pvs.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const favoriteOffres = await getFavoriteOffres();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Accueil" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative overflow-hidden rounded-3xl border p-6 md:p-10"> <div class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full"></div> <div class="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full"></div> <div class="relative space-y-4"> <p class="text-xs uppercase tracking-[0.3em] text-(--brand-muted) motion-safe:animate-[rise_0.6s_ease-out_both]">
Agence immobiliere
</p> <h1 class="text-3xl font-semibold text-(--brand-ink) md:text-5xl font-['Fraunces'] motion-safe:animate-[rise_0.6s_ease-out_both]" style="animation-delay: 0.05s">
Trouvez le bien qui vous ressemble, quartier par quartier.
</h1> <p class="max-w-2xl text-base text-slate-600 md:text-lg motion-safe:animate-[rise_0.6s_ease-out_both]" style="animation-delay: 0.1s">
Nous selectionnons des logements lumineux, bien situes et prets a
        visiter. Un parcours simple, des offres claires, et un suivi humain.
</p> <div class="flex flex-wrap gap-3 motion-safe:animate-[rise_0.6s_ease-out_both]" style="animation-delay: 0.15s"> <a class="rounded-full px-5 py-2 text-sm font-semibold shadow-sm" href="/offres">
Voir les offres
</a> <a class="rounded-full border px-5 py-2 text-sm font-semibold text-slate-700 transition" href="#services">
Nos services
</a> </div> </div> </section> ${favoriteOffres.length > 0 && renderTemplate`<section class="mt-12"> <h2 class="text-2xl font-semibold mb-6">Nos coups de coeur</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${favoriteOffres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div> </section>`}` })}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/index.astro", void 0);

const $$file = "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
