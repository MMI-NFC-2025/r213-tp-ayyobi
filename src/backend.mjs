import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function getOffres() {
    try {
        let data = await pb.collection('Maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}
// Fonction pour obtenir l'URL d'une image à partir d'un enregistrement et du champ image   
export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

// Exemple de fonction pour obtenir une offre par ID
export async function getOffre(id) {
    try {
        const data = await pb.collection('Maison').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}


// Fonction pour obtenir les offres avec une surface minimale
export async function getOffresMinSurface(surface) {
  try {
    const data = await pb.collection('Maison').getFullList({
      filter: `surface >= ${surface}`,
    });

    return data;
  } catch (error) {
    console.log("Erreur surface", error);
    return [];
  }
}

export async function getOffresMaxPrix(maxPrix) {
  try {
    const data = await pb.collection("Maison").getFullList({
      filter: `prix < ${maxPrix}`,
      sort: "prix",
    });
    return data;
  } catch (error) {
    console.log("Erreur lecture maisons par prix", error);
    return [];
  }
}



