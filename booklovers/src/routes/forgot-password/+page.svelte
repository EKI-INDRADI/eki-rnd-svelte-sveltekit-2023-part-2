<!-- div.row>div.col>h1 -->


<script>
    import AuthForm from "$lib/components/Auth/AuthForm.svelte";
	import { mailResetPasswordEmail } from "$lib/firebase/auth.client";
	import messagesStore from "$lib/stores/messages.store";

async function onForgotPassword(e) {
	try {
		const formData = new FormData(e.target);
		const email = formData.get("email");
		await mailResetPasswordEmail(email)
		messagesStore.showSuccess("Password reset email sent.");
		alert('email sent');
	} catch (error) {
		messagesStore.showError();
		console.log(error.code);
	}
}

</script>

<div class="row">
	<div class="col">
		<h1>Forgot Password</h1>
	</div>
</div>

<!-- <AuthForm forgotPassword={true} btnName="Forgot Password"/> -->
<AuthForm on:submit={onForgotPassword} forgotPassword={true} btnName="Forgot Password"/>

<svelte:head>
	<title>Forgot Password - Forgot Password</title>
</svelte:head>
