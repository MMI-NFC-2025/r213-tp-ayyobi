import { s as setFavori } from '../../chunks/backend_B_PQ7pvs.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const house = await request.json();
    const updatedHouse = await setFavori(house);
    return new Response(JSON.stringify({ success: true, house: updatedHouse }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error toggling favorite", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err?.message || "Erreur lors de la mise a jour du favori",
      }),
      {
      status: 500,
      headers: { "Content-Type": "application/json" },
      },
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
