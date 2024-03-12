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


    // console.log("smallPictureUrl", smallPictureUrl)
    // console.log("mainPictureUrl", mainPictureUrl)
    // update the doc in firestore database with the picture urls

    await bookRef.update({
        main_picture: mainPictureUrl,
        small_picture: smallPictureUrl
    })

    // return book id
    return bookRef.id
}

export async function editBook(id, form, userId) {
    const bookRef = await db.collection('books').doc(id);
    let mainPicture = form.main_picture || null;
    let smallPicture = form.small_picture || null;

    //-------------- issue memory
    // NOT ISSUE, ISSUE IN SVELTE IMAGE NOT RELOAD BECAUSE SAME URL (FIREBASE IMAGE)
    // delete form.main_picture;
    // delete form.small_picture;
    // await bookRef.update(form)

    if (form?.main_picture) {
        mainPicture = form.main_picture ?? null
        try { delete form.main_picture; } catch (skip_err) { }
    }

    if (form?.small_picture) {
        smallPicture = form.small_picture ?? null
        try { delete form.small_picture; } catch (skip_err) { }
    }

    await bookRef.update(form)
    //-------------- issue memory

    if (mainPicture) {
        const mainPictureUrl = await saveFiletoBucket(mainPicture,
            `${userId}/${bookRef.id}/main_picture`)

        // console.log('main_picture', mainPictureUrl)
        try {
            await bookRef.update({ main_picture: mainPictureUrl })
        } catch (error) {
            console.log('error bookRef.update main_picture :')
            console.log(error)
        }
    }


    if (smallPicture) {
        const smallPictureUrl = await saveFiletoBucket(smallPicture,
            `${userId}/${bookRef.id}/small_picture`)
        // console.log('small_picture', smallPictureUrl)
        try {
            await bookRef.update({ small_picture: smallPictureUrl })
        } catch (error) {
            console.log('error bookRef.update small_picture :')
            console.log(error)
        }

    }



    //-------------- bug fix await
    // let getData = await getBook(id)
    // let res_json = {}
    // res_json.statusCode = 200
    // res_json.message = 'success update'
    // res_json.data = { ...getData }
    // return res_json
    //-------------- bug fix await
}

export async function getBook(id) {
    //-----------firebase issue image cache

    // NOTE : URL NOT CHANGES, IMAGE  ALREADY CHANGES, SVELTE IMAGE NOT RELOAD BECAUSE SAME URL
    const bookRef = await db.collection('books').doc(id).get();

    if (bookRef.exists) {
        return { id: bookRef.id, ...bookRef.data() }
    }
    //-----------firebase issue image cache
}