import { doc, getDoc } from 'firebase/firestore';
import type { Vote } from '~/types/global';

export async function getVote(barcode: string): Promise<Vote | undefined> {
  const db = useFirestore();

  const docRef = doc(db, 'Votes', barcode);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return undefined;

  // TODO: use withConverter instead of casting
  return docSnap.data() as Vote;
}
