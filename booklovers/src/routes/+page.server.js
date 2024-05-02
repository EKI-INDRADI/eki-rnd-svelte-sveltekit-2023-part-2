import { getBooks } from "$lib/firebase/database.server";

// import { db } from "$lib/firebase/firebase.server";
// export async function load() {
// const count = await db.collection('users').count().get();
// return {
//     count : count.data().count
// }

export async function load({ locals }) {
    const books = await getBooks(locals?.user?.id);
    return { books }
}