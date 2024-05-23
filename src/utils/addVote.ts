import { doc, setDoc } from 'firebase/firestore';

export async function addVote(barcode: string, user: string, vote: boolean | undefined) {
    const db = useFirestore();
    const documentId = `${barcode}_${user}`; 
    if (vote === undefined) {
        throw new Error("Vote value is undefined");
      }
    try {
        await setDoc(doc(db, 'Votes', documentId), {
            barcode: barcode,
            user: user,
            vote: vote,
        });
        console.log('Vote successfully added');
    } catch (error) {
        console.error('Error adding vote: ', error);
    }
}
