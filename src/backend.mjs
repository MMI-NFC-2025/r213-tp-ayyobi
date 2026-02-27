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


// fonction pour ontenir les offres à prix moin de 250000
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

// fonction pour ontenir les offres à prix entre 200000 et 300000
export async function getOffresBetweenPrix(minPrix, maxPrix) {
  try {
    const min = Math.min(minPrix, maxPrix);
    const max = Math.max(minPrix, maxPrix);

    const data = await pb.collection("Maison").getFullList({
      filter: `prix >= ${min} && prix <= ${max}`,
      sort: "prix",
    });
    return data;
  } catch (error) {
    console.log("Erreur lecture maisons entre deux prix", error);
    return [];
  }
}


// Fonction pour ajouter une nouvelle offre
export async function addOffre(formData) {
  try {
    await pb.collection("Maison").create(formData);

    return {
      success: true,
      message: "Offre ajoutée avec succès ",
    };
  } catch (error) {
    console.log("Une erreur est survenue en ajoutant la maison", error);
    return {
      success: false,
      message: "Une erreur est survenue en ajoutant la maison ",
    };
  }
}
