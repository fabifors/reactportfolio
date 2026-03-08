import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

export async function submitContact(data: ContactSubmission): Promise<void> {
  await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
