<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Nav from '$lib/components/Nav.svelte';

	/**
	* Challenge
	Implement logic and code so that when message store is storing type success message has the alert alert-success
	class and the error type has the alert-danger class.

In the strong tag you should show Error for Success based on the type of alert.

Replace the fake text with the message that is stored in the message store.

Make the alert disappear when you click on the button inside the alert div. Test it out in an onMount using a
setTimeout.
*/

	import messagesStore from '$lib/stores/messages.store';

	// ---------------FOR TESTING
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	setTimeout(() => {
	// 		// messagesStore.showError();
	// 		messagesStore.showSuccess('Yeahh!!')
	// 	}, 1000);
	// });
	// onMount;
	// ---------------FOR TESTING

	//------------- import firebase (auto initialized)
	import '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';
	//------------- /import firebase (auto initialized


	import authStore from '$lib/stores/auth.store';
	import bookNotifyStore from '$lib/stores/book-notify.store';
	import { onDestroy } from 'svelte';
	let notifyBook;
	const unsub = bookNotifyStore.subscribe((book) => {
		console.log(notifyBook);
		if (!$authStore.isLoggedIn) {
			notifyBook = book;
			return;
		}
		if ($authStore.userId !== book.user_id) {
			notifyBook = book;
			return;
		}
	});
	onDestroy(() => {
		unsub();
	});
	function closeAlert() {
		notifyBook = null;
	}

	export let data;
	let isLoggedIn = data.isLoggedIn;

	$: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn : data.isLoggedIn;

	let timerId;

	async function sendServerToken() {
		try {
			await sendJWTToken();
		} catch (error) {
			clearInterval(timerId);
			messagesStore.showError();
			console.log(error);
		}

		return () => {
			clearInterval(timerId);
		};
	}

	onMount(async () => {
		try {
			await sendServerToken();
			timerId = setInterval(
				async () => {
					// automatically refresh token every 5 minutes
					await sendServerToken();
				},
				1000 * 10 * 60
			);
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
	});

	function closeMessage() {
		messagesStore.hide();
	}
</script>

<Nav {isLoggedIn} />
<!-- main.container -->
<main class="container">
	{#if $messagesStore.show}
		<div class="row mt-3">
			<div class="col">
				<!-- <div class="alert alert-dismissible alert-danger" role="alert"> -->
				<div
					class:alert-danger={$messagesStore.type === 'error'}
					class:alert-success={$messagesStore.type === 'success'}
					class="alert alert-dismissible"
					role="alert"
				>
					<!-- <strong>Error:</strong> -->
					<strong>{$messagesStore.type === 'error' ? 'Error' : 'Success'}</strong>
					{$messagesStore.message}
					<!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nisi sit praesentium. -->
					<!-- <button type="button" class="btn-close" aria-label="Close" /> -->
					<button type="button" on:click={closeMessage} class="btn-close" aria-label="Close" />
				</div>
			</div>
		</div>
	{/if}

	<slot />

	{#if notifyBook}
	<div
		class="toast show position-fixed top-0 end-0 m-3"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
	>
		<div class="toast-header">
			<strong class="me-auto">New Book</strong>
			<button
				on:click={closeAlert}
				type="button"
				class="btn-close"
				data-bs-dismiss="toast"
				aria-label="Close"
			/>
		</div>
		<div class="toast-body">
			Book <a data-sveltekit-preload-data="hover" href="/book/{notifyBook.id}"
				>{notifyBook.title}</a
			> just created!!
		</div>
	</div>
{/if}
</main>
