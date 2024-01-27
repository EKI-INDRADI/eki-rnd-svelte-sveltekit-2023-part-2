<!-- div.row>div.col>h1 -->

<script>
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import { mailResetPasswordEmail } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';

	let hideForm = false;

	async function onForgotPassword(e) {
		try {
			const formData = new FormData(e.target);
			const email = formData.get('email');
			await mailResetPasswordEmail(email);
			// error not handle  (auth/user-not-found), bug depedency
			alert('email sent');
			hideForm = true;
			messagesStore.showSuccess('Password reset email sent.');
		} catch (error) {
			console.log(error);
			if (error.code === 'auth/user-not-found') {
				messagesStore.showError('Email not found, please try again.');
				return;
			}

			messagesStore.showError();
		}
	}
</script>


{#if !hideForm}
<div class="row">
	<div class="col">
		<h1>Forgot Password</h1>
	</div>
</div>
	<!-- <AuthForm forgotPassword={true} btnName="Forgot Password"/> -->
	<AuthForm on:submit={onForgotPassword} forgotPassword={true} btnName="Forgot Password" />
{/if}

<svelte:head>
	<title>Forgot Password - Forgot Password</title>
</svelte:head>
