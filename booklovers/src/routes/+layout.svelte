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
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			// messagesStore.showError();
			messagesStore.showSuccess('Yeahh!!')
		}, 1000);
	});
	onMount;

	function closeMessage() {
		messagesStore.hide()
	}
</script>

<Nav />
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
</main>
