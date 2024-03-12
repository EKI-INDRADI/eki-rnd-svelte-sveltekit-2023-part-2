<script>
	import BookForm from "$lib/components/Books/BookForm.svelte";

	export let data;
    export let form;
</script>

<!-- <h1>{data.book.title}</h1> -->
<BookForm form={{...data.book, ...form}} />
