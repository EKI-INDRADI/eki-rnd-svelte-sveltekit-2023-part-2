<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<!-- <script>
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';
	export let data;

	onMount(async () => {
		const token = await getAuth().currentUser?.getIdToken(true);
        console.log(token,'jwt')
	});
</script> -->

<!-- data.count f12 view source (render on server side) -->
<!-- <h1>Num of users: {data.count}</h1> -->

<!-- <img src="https://storage.googleapis.com/booklovers-1ca99.appspot.com/pajDUT2qB6dttq4aAA8G7W6VgM53%2F9FSN5C9aXhZYlvROer1S%2Fsmall_picture" > -->
<!-- <img src="https://storage.googleapis.com/booklovers-1ca99.appspot.com/pajDUT2qB6dttq4aAA8G7W6VgM53%2F9mGztPMBQG9RvBicDNTd%2Fmain_picture?timestamp=9999999999" > -->
<!-- <img src="https://storage.googleapis.com/booklovers-1ca99.appspot.com/pajDUT2qB6dttq4aAA8G7W6VgM53%2F9mGztPMBQG9RvBicDNTd%2Fmain_picture" > -->

<!-- <script> 

	//----------------------------------
	// import { onMount } from "svelte";

	// onMount(async () => {
	// 	const response = await fetch('/like/9mGztPMBQG9RvBicDNTd');
	// 	const json = await response.json()
	// 	console.log(response, "jwt");
	// });


	// NOTE : like test counter incerement/decrement 1/0 ( test by refresh page)
	//----------------------------------
</script>
-->

<script>
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';
	import Book from '$lib/components/Books/Book.svelte';

	export let data;
	// console.log(data);

	async function back() {
		try {
			await goto(`/?page=${+data.page - 1}`);
		} catch (e) {
			messagesStore.showError();
		}
	}
	async function next() {
		try {
			await goto(`/?page=${+data.page + 1}`);
		} catch (e) {
			messagesStore.showError();
		}
	}
</script>

<!-- <ul> -->

<!-- div.row>div.col>h1 -->
<div class="row">
	<div class="col">
		<!-- <h1>Books / Page {data.page}</h1> -->
		<h1>Latest Books</h1>
		<h3>Page: {data.page}</h3>
	</div>
</div>

{#each data.books as book (book.id)}
	<!-- <li>{book.title}</li> -->
	<Book {book} />
{/each}
<!-- </ul> -->

<div class="row mt-3">
	<!-- <div class="row"> -->
	<div class="col">
		<button on:click={back} disabled={!data.previous} class="btn btn-info w-100">Previous</button>
	</div>
	<div class="col">
		<button on:click={next} disabled={!data.next} class="btn btn-info w-100">Next</button>
	</div>
</div>
