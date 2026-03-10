import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from './astro/server_wyg04kuQ.mjs';
import 'piccolore';
import { j as getImageUrl } from './backend_B_PQ7pvs.mjs';
import { $ as $$Image } from './_astro_assets_DwN0xjqs.mjs';

const $$Astro = createAstro();
const $$PbImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PbImage;
  const { record, recordImage } = Astro2.props;
  const imageURL = await getImageUrl(record, recordImage);
  return renderTemplate`${imageURL && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageURL, "alt": record.nom_evenement || "Image", "width": 800, "height": 500, "sizes": "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", "class": "block w-full h-full object-cover" })}`}`;
}, "C:/Users/Panda/OneDrive/Documents/GitHub/r213-tp-ayyobi/src/components/PbImage.astro", void 0);

export { $$PbImage as $ };
