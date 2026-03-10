import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, n as renderHead, r as renderComponent, o as renderSlot } from './astro/server_wyg04kuQ.mjs';
import 'piccolore';
/* empty css                        */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow"> <div class="max-w-4xl mx-auto px-4 py-3 flex gap-6"> <a href="/" class="text-sm font-medium text-gray-800 transition hover:text-amber-700">
Accueil
</a> <a href="/offres" class="text-sm font-medium text-gray-800 transition hover:text-amber-700">
Offres
</a> <a href="/agents" class="text-sm font-medium text-gray-800 transition hover:text-amber-700">
Agents
</a> </div> </nav>`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-12 border-t border-slate-200 bg-white"> <div class="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between"> <p class="text-base font-semibold text-slate-900">Agence immobilière</p> <nav class="flex flex-wrap gap-4"> <a class="transition hover:text-900" href="/">Accueil</a> <a class="transition hover:text-900" href="/offres">Offres</a> <a class="transition hover:text-900" href="#services">Services</a> </nav> <p class="text-xs uppercase text-400">Copyright 2026</p> </div> </footer>`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;700&family=Manrope:wght@400;600&display=swap"><title>${titre}</title>${renderHead()}</head> <body class="min-h-screen bg-gray-100 font-['Manrope'] text-gray-900 antialiased"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-4xl mx-auto p-4"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
