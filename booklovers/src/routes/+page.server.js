import { getBooks } from "$lib/firebase/database.server";

// import { db } from "$lib/firebase/firebase.server";
// export async function load() {
// const count = await db.collection('users').count().get();
// return {
//     count : count.data().count
// }

export async function load({ locals, url }) {

    const page = url.searchParams.get('page') || 1;

    // const books = await getBooks(locals?.user?.id);
    const { books, next, previous } = await getBooks(locals?.user?.id, page);

    return {
        books,
        next,
        previous,
        page
    }
}