import { setFavori } from "../../backend.mjs";

export async function post({ request }) {
  try {
    const house = await request.json();
    await setFavori(house);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error toggling favorite", err);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
