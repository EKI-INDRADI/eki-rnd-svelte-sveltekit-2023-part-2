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





## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2024_3_DIGIT_MOTIVATION

## Reference : 

:link: https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023


