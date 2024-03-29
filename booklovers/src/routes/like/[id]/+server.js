import { getBook, toggleBookLike } from "$lib/firebase/database.server";
import { error, json } from "@sveltejs/kit";

export async function GET({ params, locals }) {
    // reference :  booklovers\src\hooks.server.js


    if (!locals.user) {
        throw error(403, { message: 'Access Denied' });
    }

    const book = await getBook(params.id);

    if (!book) {
        throw error(404, { message: 'Book not found' });
    }


    try {
        //3:39
        const newBook = await toggleBookLike(params.id, locals.user.id);
        return json({ ...newBook });
    } catch (e) {
        console.log(e)
        throw error(500, { message: 'Server Error' })
    }



}