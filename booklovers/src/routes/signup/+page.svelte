<script>
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import LoginWithGoogle from '$lib/components/Auth/LoginWithGoogle.svelte';
	import { registerWithEmailandPassword } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { goto } from '$app/navigation'; // https://kit.svelte.dev/docs/modules#$app-navigation-goto
	async function register(e) {
		try {
			const fromData = new FormData(e.target);
			const email = fromData.get('email');
			const password = fromData.get('password');

			if (!email || !password) {
				messagesStore.showError('Please enter a valid email and password');
				return;
			}

			if (password?.length < 6) {
				messagesStore.showError('Password must be 6 characters or more');
				return;
			}

			const user = await registerWithEmailandPassword(email, password); // akan kena handle try catch

			await goto('/login'); // fix success regis redirect login
			return;

		} catch (e) {
			// console.log(error.code)

			// console.log('check-error');
			// console.log(e)
			if (e.code === 'auth/email-already-in-use') {
				messagesStore.showError('You Have already registered, please log in.');
				await goto('/login');
				return;
			}

			if (e.code === 'auth/weak-password') {
				messagesStore.showError('weak password!, please try again');
				await goto('/signup');
				return;
			}

			if (e.code === 'auth/missing-password') {
				messagesStore.showError('missing password, please try again');
				await goto('/signup');
				return;
			}

			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<!-- div.row>div.col>h1 -->
<div class="row">
	<div class="col">
		<h1>Sign Up</h1>
	</div>
</div>

<hr />

<!-- <AuthForm btnName="Sign Up!" /> -->
<AuthForm on:submit={register} btnName="Sign Up!" />

<hr />

<LoginWithGoogle />

<svelte:head>
	<title>Book Lovers - Sign Up</title>
</svelte:head>
