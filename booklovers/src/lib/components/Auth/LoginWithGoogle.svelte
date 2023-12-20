<script>
	import { LoginWithGoogle } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';

	async function loginGoogle() {
		try {
			const user = await LoginWithGoogle();
			// console.log(user) // <<< CHECK USER    uid  / user UID
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
