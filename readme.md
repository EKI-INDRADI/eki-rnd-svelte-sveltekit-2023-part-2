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


<details>
  <summary>EKI-20240126-061-Forgot-Password-Workflow [INPROGGRESS]</summary>

```sh

# http://localhost:5173/forgo-password


# console.log(firebaseConfig) // API KEY ISSUE FOR FORGOT PASSWORD
# https://stackoverflow.com/questions/64343788/firebase-email-link-authentication-leads-to-a-page-that-says-error-encountered
# https://booklovers-1ca99.firebaseapp.com/__/auth/action?mode=resetPassword&oobCode=XWEDWsatBq1iLg4pzGvaouACwSRjt0t5R0OaQgL6BlEAAAGNRT6bsQ&apiKey=&lang=en
# perlu makesure https://console.firebase.google.com -> Auth -> Templates
# expetation : https://test-auth-79dae.firebaseapp.com/__/auth/action?apiKey={yourApiKey}&oobCode={obbCode}&continueUrl={urlParameter}&lang=en
   

```

</details>




<details>
  <summary>EKI-20240128-062-Forgot-Password-Workflow-Final</summary>


FIREBASE - FORGOT PASSWORD - Error encounter, The selected page mode is invalid.

![Screenshot](1_firebase_forgot_password_error_encountered.png)

FIREBASE - FORGOT PASSWORD - Error encounter bug fix

![Screenshot](2_firebase_forgot_password_fix_error_encountered.png)

FIREBASE - FORGOT PASSWORD

![Screenshot](3_firebase_forgot_password_fix_error_encountered_solved.png)


```sh

for customize template  :

firebase console -> authentication -> template -> reset password

```

</details>



<details>
  <summary>EKI-20240128-063-After-Login-Redirect</summary>

```sh

example test custom redirect url : 

- http://localhost:5173/login?redirect=/add -> login with google -> http://localhost:5173/add

example test  default : 

- http://localhost:5173/login -> login with google -> http://localhost:5173

```


</details>


<details>
  <summary>EKI-20240204-064-Saving-the-user-to-Firestore-Client-Side</summary>

```sh

firebase console -> booklovers -> Authentication -> Firestore Database -> Rule

```

default rule
```js

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

```

edit & publish
```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}{
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

login with google

check after login
```sh

firebase console -> booklovers -> Authentication -> Firestore Database -> Data

```


</details>

<details>
  <summary>EKI-20240204-065-Firebase-initialize-on-the-server</summary>

```sh

npm i firebase-admin -D

```

</details>



<details>
  <summary>EKI-20240204-066-Firebase-server-auth-plan</summary>

![firebase_auth](4_firebase_authentication_serverside.png)

</details>



<details>
  <summary>EKI-20240205-067-Token-Endpoint</summary>


A. how to decrypt/decode firebase token

```sh

1. get token

booklovers\src\routes\+page.svelte

```


```html

<script>
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';
	// export let data;

	onMount(async () => {
		const token = await getAuth().currentUser?.getIdToken(true);
        console.log(token,'jwt')
	});
</script>


<!-- <h1>Num of users: {data.count}</h1> -->

```


```sh

2. browser f12 console

copy token

3. go https://jwt.io/

decrypt 

algo : SHA256

paste token

```


B. TESTING API

1. download [postman](https://www.postman.com/)

2. test postman

```json
{
  "method" : "POST,
  "url" : "http://localhost:5173/token"
  "request" : {
    "token" : "<your_firebase_token>",
    "email" : "<your_email>"
  }
}

```


3.Success

![Screenshot](5_cookies_from_firebase_token_1.png)

![Screenshot](5_cookies_from_firebase_token_2.png)



</details>


<details>
  <summary>EKI-20240213-068-Send-Token-After-Register-Challenge</summary>

booklovers\src\lib\firebase\auth.client.js
```js

export async function sendJWTToken() {

    // NOTE : GET TOKEN firebase chrome F12 http://localhost:5173/token 
    // (login with google enable generate JWT token)

    const auth = getAuth()
    const user = auth.currentUser;
    if (!user) {
        return;
    }


    const token = await user.getIdToken(true);
    await fetch('/token', {
        method: 'POST',
        body: JSON.stringify({ token, email: user.email }),
    })
}

```

booklovers\src\lib\helpers\route.helper.js
```js

export async function afterLogin(url, userId) {
    const route = url.searchParams.get('redirect') || '/'
    await setUser(userId)
    await sendJWTToken();
    await goto(route);
}

```

```sh

google chrome F12 -> login with google -> network -> GET TOKEN http://localhost:5173/token (payload)


google chrome F12 -> login with google -> application -> cookies -> http://localhost:5173 -> jwt -> copy

go -> https://jwt.io/ -> RS256 -> paste

```

</details>


<details>
  <summary>EKI-20240213-069-Refresh-Token</summary>


booklovers\src\routes\+layout.svelte
```js

	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';

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
		}
		
	}

	onMount(async () => {
		try {
			await sendServerToken();
			timerId = setInterval(async ()=> { // automatically refresh token every 5 second
				await sendServerToken();
			}, 1000 * 5 * 1)

		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
	});

```




```sh

google chrome F12 -> login with google -> network -> GET TOKEN http://localhost:5173/token (payload)


google chrome F12 -> login with google -> application -> cookies -> http://localhost:5173 -> jwt -> check token auto refresh every 5 second

```


booklovers\src\routes\+layout.svelte
```js

	onMount(async () => {
		try {
			await sendServerToken();
			timerId = setInterval(async ()=> { // automatically refresh token every 10 minutes
				await sendServerToken();
			}, 1000 * 10 * 60)

		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
	});

```


</details>


<details>
  <summary>EKI-20240307-070-Logout-server-side</summary>

akan hit api disvelte, http://localhost:5173/logout untuk delete cookies jwt (network application cookies)

```sh
booklovers\src\routes\logout\+server.js -- create api logout
booklovers\src\lib\firebase\auth.client.js -- export async function logout() 
```


</details>



<details>
  <summary>EKI-20240307-071-Auth-Hooks</summary>

berguna untuk : jika belum login dan membuka halaman lain, maka akan redierct ke halaman login, ketika login berhasil baru akan redirect ke halaman yang dituju seblumnya


```sh

booklovers\src\hooks.server.js

    const protectRoutes = [
        '/add',
        '/edit',
        '/profile',
    ]

    const guessRoutes = [
        '/login',
        '/signup',
        '/forgot-password',
    ]


```

example : 

```sh

http://localhost:5173/add
http://localhost:5173/login?redirect=/add

```


</details>


<details>
  <summary>EKI-20240307-072-Add-Book-Validation</summary>

Add Book Validation Part 1

```sh

https://github.com/phptuts/booklovers

Add Book Form Validation

https://pastebin.com/raw/G8502qBJ


booklovers\src\lib\components\Books\BookForm.svelte

booklovers\src\routes\add\+page.svelte



depedency for validation :
npm i yup -D    



yup documentation :

https://github.com/jquense/yup

https://yup-docs.vercel.app/docs/intro

booklovers\src\lib\validators\book.validator.js


```


Add Book Validation Part 2

```sh

booklovers\src\lib\validators\book.validator.js (schema.validate with error handle)

booklovers\src\routes\add\+page.server.js (validateBook)

booklovers\src\routes\add\+page.svelte (<BookForm {form}/>)

booklovers\src\lib\components\Books\BookForm.svelte (export form & value)


detail commit : 
https://github.com/phptuts/booklovers/commit/2380381bccbe195af8664b8ecdfe88060cb257d8

```

</details>



<details>
  <summary>EKI-20240311-073-Save-Book-Database</summary>

```sh

edit booklovers\src\lib\components\Books\BookForm.svelte

create booklovers\src\lib\firebase\database.server.js

edit booklovers\src\routes\add\+page.server.js

create booklovers\src\lib\firebase\firestorage.server.js

import { PUBLIC_STORAGE_BUCKET } from '$env/static/public'; // from booklovers\.env

booklovers\src\lib\firebase\firestorage.server.js

npm i uuid -D

---- troubleshoot

booklovers\src\lib\validators\book.validator.js << check value
booklovers\src\routes\add\+page.server.js

firebase console -> booklovers -> firebase database 


reference commit : https://github.com/phptuts/booklovers/commit/2c998217d85ef5ccb517a2745668fe6fdaa232e1

add book success url redirect to "http://localhost:5173/book/xxxxxx"


test image public

booklovers\src\routes\+page.svelte
<img src="https://storage.googleapis.com/booklovers-xxx.appspot.com/xxxx" >


image directory
firebase console -> booklovers -> storage

```

</details>

<details>
  <summary>EKI-20240311-074-Show-Book-Page</summary>

```sh

copy : 25 - Show Book page from https://github.com/phptuts/booklovers 

create booklovers\src\routes\book\[id]\+page.svelte

test http://localhost:5173/book/123

create booklovers\src\routes\book\[id]\+page.server.js

test http://localhost:5173/book/9FSN5C9aXhZYlvROer1S

test http://localhost:5173/book/123 -> 404


```


</details>

<details>
  <summary>EKI-20240312-075-Edit-Book-Page</summary>


```sh

create booklovers\src\routes\edit\[id]\+page.server.js
create booklovers\src\routes\edit\[id]\+page.svelte
update booklovers\src\lib\components\Books\BookForm.svelte
update booklovers\src\lib\validators\book.validator.js
update booklovers\src\lib\firebase\firebase.server.js

```

</details>

<details>
  <summary>EKI-20240312-076-Enhanced-Forms</summary>


```sh

update booklovers\src\lib\components\Books\BookForm.svelte

```

</details>


<details>
  <summary>EKI-20240312-077-Edit-Book-Page-Firebase-Image-Issue</summary>


```sh

NOTE : URL NOT CHANGES, UPDATE IMAGE  ALREADY CHANGES, SVELTE IMAGE NOT RELOAD BECAUSE SAME URL

```

example fix : 

```html

 <img src="https://storage.googleapis.com/booklovers-1ca99.appspot.com/pajDUT2qB6dttq4aAA8G7W6VgM53%2F9mGztPMBQG9RvBicDNTd%2Fmain_picture?timestamp=9999999999" > 

 <img src="https://storage.googleapis.com/booklovers-1ca99.appspot.com/pajDUT2qB6dttq4aAA8G7W6VgM53%2F9mGztPMBQG9RvBicDNTd%2Fmain_picture" > 

```


</details>


<details>
  <summary>EKI-20240321-078-Like-Endpoint</summary>


```sh

update booklovers\src\routes\like\[id]\+server.js export async function GET

update booklovers\src\lib\firebase\database.server.js  toggleBookLike

firebase console -> firestore database -> copy 1 books id

update booklovers\src\routes\+page.svelte -> paste book id (for test like) 

# ---------- TEST
# NOTE : like test counter incerement/decrement 1/0 (test by refresh page http://localhost:5173/)
firebase console -> firestore database 
collection = books
{
  ...
  likes : 1 # ->> 0 or 1
  ...
}

collection = user
{
  ...
  bookIds : [  # ->> exist or not exist key []
    "sadasdas",
  ]
  ...
}

# ---------- /TEST
 

```


</details>


<details>
  <summary>EKI-20240325-079-Like-Component</summary>

```sh

https://github.com/phptuts/booklovers/commit/8e60266489d70a1b402ce9a2eeede66cdbb855b7

https://github.com/phptuts/booklovers (Like Component)

create booklovers\src\lib\components\Books\Like.svelte
update booklovers\src\lib\firebase\database.server.js getBook , getUser

-- makesure refresh page home for input

{
  user_id: 'xxxx',
  bookIds: [ 'xxxx' ]
}

update booklovers\src\routes\+page.svelte load
update booklovers\src\routes\book\[id]\+page.svelte book.linkedBook
update booklovers\src\lib\components\Books\Like.svelte

```

</details>


<details>
  <summary>EKI-20240429-080-Toggling-Like & EKI-20240429-081-Toggling-Like-Part2</summary>

```sh

update booklovers\src\lib\components\Books\Like.svelte
update booklovers\static\loading.gif
update booklovers\src\routes\book\[id]\+page.svelte

TEST URL : http://localhost:5173/book/9mGztPMBQG9RvBicDNTd

CLICK MENU TOGGLE : http://localhost:5173/like/9mGztPMBQG9RvBicDNTd


```

</details>


<details>
  <summary>EKI-20240502-082-Books-Home-page</summary>

```sh

booklovers\src\lib\firebase\database.server.js getBooks
booklovers\src\routes\+page.server.js load
booklovers\src\routes\+page.svelte script ul

```

</details>


<details>
  <summary>EKI-20240506-083-Like-Component-Bug</summary>

```sh

EDIT : booklovers\src\lib\components\Books\Like.svelte
TEST WITHOUT LOGIN : http://localhost:5173/book/9mGztPMBQG9RvBicDNTd
TEST WITH LOGIN : http://localhost:5173/book/9mGztPMBQG9RvBicDNTd

```

</details>


<details>
  <summary>EKI-20240506-084-Pagination</summary>

update .env
```sh
PAGE_SIZE=3
```

test makesure input 9 item & test page
```sh
http://localhost:5173/?page=1
http://localhost:5173/?page=2
http://localhost:5173/?page=3
```


```sh
update booklovers\src\lib\firebase\database.server.js
update booklovers\src\routes\+page.server.js
update booklovers\src\routes\+page.svelte
```

</details>


<details>
  <summary>EKI-20240507-085-Book-Component-and-Home-Page</summary>

```sh
https://github.com/phptuts/booklovers
https://pastebin.com/raw/XSRHFTG5

update booklovers\src\routes\+page.svelte
update booklovers\src\lib\components\Books\Book.svelte


```

</details>


<details>
  <summary>EKI-20240520-086-Profile-Page-Setup</summary>

```sh

https://github.com/phptuts/booklovers

https://pastebin.com/raw/Yz59kbdR (profile page)

create booklovers\src\routes\profile\+layout.svelte
create booklovers\src\routes\profile\+page.svelte
create booklovers\src\routes\profile\favorites\+page.svelte


```

</details>


<details>
  <summary>EKI-20240614-087-My-Book</summary>

```sh

updete booklovers\src\lib\firebase\database.server.js getBooksForUser
create booklovers\src\routes\profile\+page.server.js 
update booklovers\src\routes\profile\+page.svelte


```


http://localhost:5173/profile

if get error like this :

```sh
 {
  code: 9,
  details: 'The query requires an index. You can create it here: https://console.firebase.google.com/v1/r/project/booklovers-1ca99/firestore/indexes?create_composite=Ck5wcm9qZWN0cy9ib29rbG92ZXJzLTFjYTk5L2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9ib29rcy9pbmRleGVzL18QARoLCgd1c2VyX2lkEAEaDgoKY3JlYXRlZF9hdBACGgwKCF9fbmFtZV9fEAI',
  metadata: Metadata {
    internalRepr: Map(1) { 'x-debug-tracking-id' => [Array] },
    options: {}
  },
  note: 'Exception occurred in retry method that was not classified as transient'
}

https://github.com/phptuts/booklovers/commit/4c8ff7faa11bdc2b1c45898cf258c9c3913b51ec

```

copy and open to new browser (need logic firebase account)

```sh
https://console.firebase.google.com/v1/r/project/booklovers-1ca99/firestore/indexes?create_composite=Ck5wcm9qZWN0cy9ib29rbG92ZXJzLTFjYTk5L2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9ib29rcy9pbmRleGVzL18QARoLCgd1c2VyX2lkEAEaDgoKY3JlYXRlZF9hdBACGgwKCF9fbmFtZV9fEAI
```

![alt text](https://github.com/EKI-INDRADI/eki-rnd-svelte-sveltekit-2023-part-2/blob/EKI-20240614-087-My-Book/EKI-20240614-087-My-Book.png?raw=true)

![alt text](https://github.com/EKI-INDRADI/eki-rnd-svelte-sveltekit-2023-part-2/blob/EKI-20240614-087-My-Book/EKI-20240614-087-My-Book_2.png?raw=true)

wait in minutes , if still eror re-try copy and paste url to new browser and save

```sh
https://console.firebase.google.com/v1/r/project/booklovers-1ca99/firestore/indexes?create_composite=Ck5wcm9qZWN0cy9ib29rbG92ZXJzLTFjYTk5L2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9ib29rcy9pbmRleGVzL18QARoLCgd1c2VyX2lkEAEaDgoKY3JlYXRlZF9hdBACGgwKCF9fbmFtZV9fEAI
```

![alt text](https://github.com/EKI-INDRADI/eki-rnd-svelte-sveltekit-2023-part-2/blob/EKI-20240614-087-My-Book/EKI-20240614-087-My-Book_3.png?raw=true)


</details>


<details>
  <summary>EKI-20240618-088-Fix-Book-Link</summary>

 update booklovers\src\lib\components\Books\Book.svelte goToBookPage

</details>

<details>
  <summary>EKI-20240618-089-Favorite-Books</summary>

  update booklovers\src\lib\firebase\database.server.js getLikedBooks
  create booklovers\src\routes\profile\favorites\+page.server.js
  update booklovers\src\routes\profile\favorites\+page.svelte
  update booklovers\src\lib\components\Books\Like.svelte stopPropagation

</details>


<details>
  <summary>EKI-20240627-090-Unliking-books-on-favorites-page</summary>

update booklovers\src\lib\components\Books\Like.svelte toggleLike(e)
update booklovers\src\lib\components\Books\Book.svelte on:toggle_like
update booklovers\src\routes\profile\favorites\+page.svelte on:toggle_like={filterUnlinkedBooks}

</details>

<details>
  <summary>EKI-20240715-091-SSR-Menu</summary>

fix menu refresh (flicker) logout/login


create booklovers\src\routes\+layout.server.js
update booklovers\src\routes\+layout.svelte ref booklovers\src\lib\stores\auth.store.js
update booklovers\src\lib\components\Nav.svelte


fix menu without refresh (flicker) logout/login

</details>


<details>
  <summary>EKI-20240715-092-Real-Time-New-Book-Alerts</summary>

https://github.com/phptuts/booklovers

37 - Notify new book alert

https://github.com/phptuts/booklovers/commit/1222cba1250445e36a5b47c281015c82cbeab8ae


copy to booklovers\src\routes\+layout.svelte
update booklovers\src\routes\+layout.svelte  (after sloth)

```html
<div
		class="toast show position-fixed top-0 end-0 m-3"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
	>
		<div class="toast-header">
			<strong class="me-auto">New Book</strong>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="toast"
				aria-label="Close"
			/>
		</div>
		<div class="toast-body">
			Book <a href="/book/REPLACE_ID">REPLACE_TITLE</a> just created!!
		</div>
	</div>
```

https://console.firebase.google.com/ -> firebase database -> rules ->

```sh
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}{
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

#---------------this update
    match /books/{bookId} {
      allow read: if true;
      allow write: if false;
    }
#---------------this update
  
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

publish


create booklovers\src\lib\stores\book-notify.store.js ref booklovers\src\lib\firebase\firebase.client.js


update booklovers\src\routes\+layout.svelte

</details>



<details>
  <summary>EKI-20240718-093-Deploying-to-Vercel</summary>

.env
```sh
GOOGLE_SERVICE_ACCOUNT=''
```


out folder project
```js
const fs = require('fs');

// Path to your JSON file
const filePath = 'firebase-secrets.server.json';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Convert the JSON object to a JSON string
        const jsonString = JSON.stringify(jsonData);

        console.log('JSON String:', jsonString);

        // Optionally, you can save this JSON string to another file or use it as needed
        const outputFilePath = 'str.firebase-secrets.server.json';
        fs.writeFile(outputFilePath, jsonString, (err) => {
            if (err) {
                console.error('Error writing the file:', err);
            } else {
                console.log('JSON string saved to', outputFilePath);
            }
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
```


update .env
```sh
GOOGLE_SERVICE_ACCOUNT='(copy paste from str.firebase-secrets.server.json)'
```

update booklovers\src\lib\firebase\firebase.server.js
update booklovers\src\lib\firebase\database.server.js

NOTE : update code firebase-secrets.server.json to .env

```sh


npm run build

npm run preview


```

deploy to vercel ready


</details>

<details>
  <summary>EKI-20240718-094-Deploying-to-Vercel-Nodejs-18</summary>

https://vercel.com/changelog/node-js-version-now-customizable-in-the-project-settings
https://vercel.com/docs/functions/runtimes/node-js/node-js-versions

package.jso
```json
{
  "engines": {
    "node": "18.x"
  }
}
```


</details>



## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2024_3_DIGIT_MOTIVATION

## Reference : 

:link: https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023


