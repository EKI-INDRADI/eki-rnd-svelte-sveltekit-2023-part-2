import validateBook from '$lib/validators/book.validator';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {

        //---PART 2
        const formData = await request.formData();
        const data = await validateBook(formData);
        if (!data.success) {
            return fail(422, data)
        }
        //---PART 2

        return { success: true };
    }
}