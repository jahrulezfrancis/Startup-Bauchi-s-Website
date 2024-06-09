import { CollectionReference, getDocs } from "firebase/firestore";



export async function FetchDataFromCollection(collection: CollectionReference) {
    const programsSnapshot = await getDocs(collection);

    const programData = programsSnapshot.docs.map((doc) => ({
        id: doc.id,
        startupName: doc.data().startupName,
        startupLogo: doc.data().startupLogo,
        description: doc.data().description,
        // ...doc.data(),
    }));
    return programData

}

export function UploadToCollection() {
    

}