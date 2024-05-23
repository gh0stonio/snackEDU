import { getDocs, query, where, collection } from 'firebase/firestore';

export const countVotes = async (barcode: string): Promise<{ upVotes: number, downVotes: number}> => {
  if (!barcode) {
    throw new Error("Barcode is required");
  }
  const db = useFirestore();
  const q = query(collection(db, "Votes"), where("barcode", "==", barcode));

  const querySnapshot = await getDocs(q);
  let upVotes = 0;
  let downVotes = 0;

  querySnapshot.forEach((doc) => {
    if (doc.data().vote == true) {
      upVotes++;
    }
    if (doc.data().vote == false) {
      downVotes++;
    }
  });

  console.log('upVotes:', upVotes);
    console.log('downVotes:', downVotes);
  return { upVotes, downVotes};
};
