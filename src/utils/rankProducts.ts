import { getDocs, query, collection } from 'firebase/firestore';
import { countVotes } from './countVotesPerProduct';

export const rankProducts = async (): Promise<string[]> => {
  const db = useFirestore();
  const q = query(collection(db, "Products"));
  const querySnapshot = await getDocs(q);

  const products = await Promise.all(querySnapshot.docs.map(async (doc) => {
    const barcode = doc.id; 
    const name = doc.data().name;


    const { upVotes } = await countVotes(barcode);
    if (name == '') {
        const brand = doc.data().brand;
        return { name: brand, upVotes };
    }
    return { name, upVotes };
  }));

  const validProducts = products.filter(product => product !== null);

  validProducts.sort((a, b) => b.upVotes - a.upVotes);
  console.log(validProducts);
  return validProducts.map((product) => product.name);

};
