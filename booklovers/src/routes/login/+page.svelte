<script>
	import LoginWithGoogle from '$lib/components/Auth/LoginWithGoogle.svelte';
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import { loginWithEmailandPassword } from '$lib/firebase/auth.client';
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';

	async function onLogin(e) {
		try {
			const fromData = new FormData(e.target);
			const email = fromData.get('email');
			const password = fromData.get('password');
			const user = await loginWithEmailandPassword(email, password);
			goto('/');
		} catch (error) {

			if (['auth/wrong-password', 'auth/user-not-found', 'auth/invalid-credential','auth/invalid-email'].includes(error.code)) {
				messagesStore.showError('Invalid email or password.');
				return;
			} 

			messagesStore.showError();
			console.log(error.code);
		}
	}


</script>

<!-- div.row>div.col>h1 -->
<div class="row">
	<div class="col">
		<h1>Login</h1>
	</div>
</div>

<hr />
<AuthForm on:submit={onLogin} btnName="Login" />
<hr />
<LoginWithGoogle />

<svelte:head>
	<title>Book Lovers - Login</title>
</svelte:head>
