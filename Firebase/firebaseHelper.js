import { doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";
import { firestore } from './firebase-setup';

// Add a new document with a generated id.
export async function writeToDB(entryItem) {
    try {
        const docRef = await addDoc(collection(firestore, "entries"), entryItem);
        console.log("Document written with ID: ", docRef.id);
    } catch (err) {
        console.log(err);
    }
}

export async function deleteFromDB(entryId) {
    try {
        await deleteDoc(doc(firestore, "entries", entryId));
    } catch (err) {
        console.log(err);
    }
}

export async function updateInDB(entryId, updatedEntry) {
    try {
        const entryRef = doc(firestore, 'entries', entryId);
        await updateDoc(entryRef, updatedEntry);
        console.log('Document updated successfully');
    } catch (err) {
        console.log(err);
    }
}
