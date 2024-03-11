import { addBook } from '$lib/firebase/database.server.js';
import validateBook from '$lib/validators/book.validator';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {

        //---PART 2
        const formData = await request.formData();


        const data = await validateBook(formData);
        if (!data.success) {
            return fail(422, data)
        }
        //---PART 2



        //data = {
        //     success: true,
        //     book: {
        //       title: 'aasdasd',
        //       author: 'asddasd',
        //       description: 'asdaasd',      
        //       short_description: 'asdaas', 
        //       main_picture: File {
        //         size: 982,
        //         type: 'image/png',
        //         name: 'test.png',
        //         lastModified: 1710143809245
        //       },
        //       small_picture: File {        
        //         size: 982,
        //         type: 'image/png',
        //         name: 'test.png',
        //         lastModified: 1710143809246
        //       }
        //     }
        //   }
        // return { success: true };
        // const bookId = await addBook(data, locals.user.id);
        const bookId = await addBook(data.book, locals.user.id);

        throw redirect(302, `/book/${bookId}`);
    }
}