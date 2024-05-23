import { doc, getDoc } from 'firebase/firestore';
import type { Product } from '~/types/global';

export async function getProduct(barcode: string): Promise<Product | undefined> {
  const db = useFirestore();

  const docRef = doc(db, 'Products', barcode);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return undefined;

  // TODO: use withConverter instead of casting
  return docSnap.data() as Product;
}
