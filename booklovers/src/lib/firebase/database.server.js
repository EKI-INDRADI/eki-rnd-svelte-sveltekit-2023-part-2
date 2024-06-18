import { db } from '$lib/firebase/firebase.server';
import { firestore } from 'firebase-admin';
import { saveFiletoBucket } from '$lib/firebase/firestorage.server';
import { PAGE_SIZE } from '$env/static/private';


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

export async function getBooksForUser(userId) {
    const user = await getUser(userId);

    const books = await db.collection('books')
        .orderBy('created_at', 'desc')
        .where('user_id', '==', userId)
        .get();

    return books.docs.map(d => {
        const likedBook = user?.bookIds?.includes(d.id) || false;

        return { id: d.id, ...d.data(), likedBook }
    })
}


export async function getLikedBooks(userId) {
    const user = await getUser(userId);

    const bookIds = user?.bookIds || [];

    if (bookIds.length === 0) {
        return [];
    }

    const books = await db.collection('books')
        .where(firestore.FieldPath.documentId(), 'in', bookIds)
        .get();

    return books.docs.map(d => {
        return { id: d.id, ...d.data(), likedBook: true }
    })
}



export async function getBook(id, userId = null) {
    //-----------firebase issue image cache

    // NOTE : URL NOT CHANGES, IMAGE  ALREADY CHANGES, SVELTE IMAGE NOT RELOAD BECAUSE SAME URL
    const bookRef = await db.collection('books').doc(id).get();

    if (bookRef.exists) {
        const user = userId ? await getUser(userId) : null;
        // console.log("const user = userId ? await getUser(userId) : null;  = ")
        // console.log(user)
        const likedBook = user?.bookIds?.includes(id) || false;
        return { id: bookRef.id, ...bookRef.data(), likedBook }
    }
    //-----------firebase issue image cache
}


export async function getBooks(userId, page = 1) {

    const user = userId ? await getUser(userId) : null;

    // const books = await db.collection('books').limit(5).orderBy('created_at', 'desc').get();

    const bookCount = await db.collection('books').count().get();

    const totalBooks = bookCount.data().count;

    const next = totalBooks > (page * +PAGE_SIZE);

    const previous = page > 1;

    const books = await db.collection('books')
        .limit(+PAGE_SIZE)
        .offset((page - 1) * +PAGE_SIZE)
        .orderBy('created_at', 'desc')
        .get();


    const likedBooks = books.docs.map(d => {
        const likedBook = user?.bookIds?.includes(d.id) || false;
        return { ...d.data(), id: d.id, likedBook }
    })

    // return likedBooks;


    return {
        books: likedBooks,
        next,
        previous
    };
}

export async function getUser(userId) {
    const user = await db.collection('users').doc(userId).get();
    return user?.data();
}


export async function toggleBookLike(bookId, userId) {
    const bookDoc = await db.collection('books').doc(bookId);
    const userDoc = await db.collection('users').doc(userId);
    const user = await userDoc.get();
    const userData = user.data();

    // unlike the book
    if (userData.bookIds && userData.bookIds.includes(bookId)) {
        await userDoc.update({
            bookIds: firestore.FieldValue.arrayRemove(bookId)
        })
        await bookDoc.update({
            likes: firestore.FieldValue.increment(-1)
        })
    } else {
        // like the book
        await userDoc.update({
            bookIds: firestore.FieldValue.arrayUnion(bookId)
        })
        await bookDoc.update({
            likes: firestore.FieldValue.increment(1)
        })

    }

    return await getBook(bookId);



}