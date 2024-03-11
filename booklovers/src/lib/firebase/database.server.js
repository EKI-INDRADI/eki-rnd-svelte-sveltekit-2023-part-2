import { db } from '$lib/firebase/firebase.server';
import { firestore } from 'firebase-admin';
import { saveFiletoBucket } from '$lib/firebase/firestorage.server';

export async function addBook(book, userId) {
    // save to the firestore database without picture information
    const bookCollection = db.collection('books');
    const bookRef = await bookCollection.add({
        title: book.title,
        short_description: book.short_description,
        description: book.description,
        author: book.author,
        user_id: userId,
        created_at: firestore.Timestamp.now().seconds,
        likes: 0
    })
    // save the pictures

    const smallPictureUrl = await saveFiletoBucket(book.small_picture,
        `${userId}/${bookRef.id}/small_picture`);

    const mainPictureUrl = await saveFiletoBucket(book.main_picture,
        `${userId}/${bookRef.id}/main_picture`);


    console.log("smallPictureUrl", smallPictureUrl)
    console.log("mainPictureUrl", mainPictureUrl)
    // update the doc in firestore database with the picture urls

    await bookRef.update({
        main_picture: mainPictureUrl,
        small_picture: smallPictureUrl
    })

    // return book id
    return bookRef.id
}

export async function getBook(id) {
    const bookRef = await db.collection('books').doc(id).get();

    if (bookRef.exists) {
        return { id: bookRef.id, ...bookRef.data() }
    }
}