import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from './firebase.client' // src\lib\firebase\firebase.client.js

export  async function setUser(userId) {
    const users =  collection(db, 'users');

    await setDoc(doc(users, userId), {
        user_id : userId
    })
}