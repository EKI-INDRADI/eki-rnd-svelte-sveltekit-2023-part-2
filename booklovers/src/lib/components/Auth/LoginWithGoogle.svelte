<script>
	import { LoginWithGoogle } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	// import { goto } from '$app/navigation'; // https://kit.svelte.dev/docs/modules#$app-navigation-goto
	import { afterLogin } from '$lib/helpers/route.helper';
	import { page } from '$app/stores';
	async function loginGoogle() {
		try {
			const user = await LoginWithGoogle();
			// console.log(user) // <<< CHECK USER    uid  / user UID
			// await goto('/'); // fix success login redirect
			// await afterLogin($page.url)
			await afterLogin($page.url, user.uid)
			return;
			
		} catch (e) {
            // check pake incognitor browser trs close popup
			if (e.code === 'auth/popup-closed-by-user') { // disable sementara jika error
				console.log('User closed popup');
				return;
			}
			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<!-- div.row>div.col>button.btn.btn-primary.w-100 -->
<div class="row">
	<div class="col">
		<button on:click={loginGoogle} class="btn btn-primary w-100">Login With Google</button>
	</div>
</div>
