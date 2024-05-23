import { doc, getDocs, query, where, collection } from 'firebase/firestore';
import type { Vote } from '~/types/global';

export async function getVote(barcode: string, user:string): Promise<Vote | null> {
  const db = useFirestore();
  const q = query(collection(db, "Votes"), where("barcode", "==", barcode), where("user", "==", user));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
});
  if (querySnapshot.empty) {
    return null;
  }
  return querySnapshot.docs[0].data() as Vote;
}
