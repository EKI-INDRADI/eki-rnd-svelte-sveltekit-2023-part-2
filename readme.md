## Tutorial : 

:link: [Udemy](https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023)


<details>
  <summary>EKI-20231205-048-INTRO</summary>

```sh

# ex :
# https://booklovers-theta.vercel.app/
# usr : ekitest@mail.com
# pas : ekitest1@mail.com

```

</details>

<details>
  <summary>EKI-20231205-049-Project-Setup</summary>

```sh
cd eki-rnd-svelte-sveltekit-2023-part-2
npm create svelte@latest booklovers

Which Svelte app template?
- Sekelton project

Add type checking with TypeScript?
- Yes, using Javascript with JSDoc comments

Select additional options (use arrow keys/space bar)

│  ◻ Add ESLint for code linting
│  ◼ Add Prettier for code formatting
│  ◻ Add Playwright for browser testing
│  ◻ Add Vitest for unit testing
│  ◻ Try out Svelte 5 beta

cd booklovers
npm install
npm run dev -- --open

```

</details>


<details>
  <summary>EKI-20231205-050-Firebase-Setup</summary>

```sh

firebase.google.com -> go to console -> create project 
-> "booklovers" 
-> Enable Google Analytics for this project ->
-> Configure Google Analytics -> Analytics location -> "indonesia"
-> use the default setting for sharing Google Analytics data
-> accept

Authentication -> Get Started 
-> Sign-in method
-> Native providers 
-> Email/Password -> Enable
-> Email/Password -> Email link (passwordless sign-in) -> Disable

Authentication ->
-> Add new provider
-> Additional providers
-> Google -> Enable
-> "SECRET DETAIL IN NOTEPAD"

Build -> Firestore Database
-> Create Database
-> Database ID : (default)
-> Location : asia-southeast2 (Jakarta)
-> Start in production mode

Build -> Storage
-> Start in production mode
-> Cloud Storage location : asia-southeast2
-> Done

Project Overview -> Project settings
-> Service accounts
-> Firebase Admin SDK
-> Admin SDK configuration snippet : Nodejs
-> Copy code paste to notepad  (save)
-> Generate new private key [json]  (save)

Project Overview -> Project settings
-> Service accounts
-> Firebase Admin SDK
-> Manage service account permission (untuk melihat account)

after Generate new private key (json) copy to /booklovers/src/lib/firebase/firebase-secrets.server.json

add .gitignore
src/lib/firebase/firebase-secrets.server.json

```

</details>


<details>
  <summary>EKI-20231206-051-Bootstrap-Navbar</summary>

```sh

npm i -D bootstrap@v5.3.2

```

Nav.svelte
```svelte
copy from 
<!-- https://github.com/phptuts/booklovers -->
<!-- https://pastebin.com/raw/04na96qx -->
```

</details>

<details>
  <summary>EKI-20231216-054-Messages</summary>

```sh
# https://github.com/phptuts/booklovers

# Message Store (copy html)

```

</details>


<details>
  <summary>EKI-20231216-055-Initialize-Firebase-Client-Side</summary>

```sh
-> https://console.firebase.google.com/ 
-> booklovers 
-> click </> (web) 
-> Add Firebase to your web app -> Register app -> 
-> uncheck [Also set up Firebase Hosting for this app]
-> Register app
-> Add Firebase SDK
-> use npm -> npm install firebase

```


copy
```js

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxxxxxxxxxxx"
};


// copy to booklovers\src\lib\firebase\firebase.client.js

```

copy https://github.com/phptuts/booklovers (Firebase Initialize) to .env

.env
```sh
# update env from js code

PUBLIC_API_KEY=
PUBLIC_AUTH_DOMAIN=
PUBLIC_PROJECT_ID=
PUBLIC_STORAGE_BUCKET=
PUBLIC_MESSAGING_SENDER_ID=
PUBLIC_API_ID=
PUBLIC_MEASUREMENT_ID=
PUBLIC_ERROR_MESSAGE="There was an error, please contact support."

# booklovers\src\lib\firebase\firebase.client.js  update code & npm run dev ,  f12
```


install firebase depedency
```sh
npm i firebase -D

update code firebase.client.js
# booklovers\src\lib\firebase.client.js

```


</details>




<details>
  <summary>EKI-20231220-056-Login-with-google</summary>

```sh

# booklovers\src\lib\components\Auth\LoginWithGoogle.svelte
# booklovers\src\lib\firebase\auth.client.js
# booklovers\src\routes\login\+page.svelte


# FOR CHECK USER LOGIN ACCOUNT (USER UID)
# GO TO
# https://console.firebase.google.com/
#
# -> Booklover -> Authentication 



```

</details>


<details>
  <summary>EKI-20240122-059-Register-Email-And-Password</summary>

```sh

# https://github.com/phptuts/booklovers

# Auth Form https://pastebin.com/raw/VkcLcTVG

create file booklovers\src\lib\components\Auth\AuthForm.svelte


https://console.firebase.google.com/ -> Booklovers -> Authentication -> copy email exist
-> Email paste to ->  -> http://localhost:5173/signup


ERROR HANDLE WITH REDIRECT + NOTIF :

      # booklovers\src\lib\components\Auth\LoginWithGoogle.svelte
			await goto('/'); // fix success login redirect
			return;

      # booklovers\src\routes\signup\+page.svelte
      await goto('/login'); // fix success register redirect login
			return;

      # booklovers\src\routes\signup\+page.svelte
      iff (e.code === 'auth/email-already-in-use') {
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

			con


```

</details>



<details>
  <summary>EKI-20240126-060-Login-with-email-and-password</summary>

```sh
# https://console.firebase.google.com

# check register/login user pass

```

</details>





## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2024_3_DIGIT_MOTIVATION

## Reference : 

:link: https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023


