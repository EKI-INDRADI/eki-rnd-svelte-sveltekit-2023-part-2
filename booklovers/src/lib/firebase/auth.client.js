import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';

export async function LoginWithGoogle() {
    const auth = getAuth();
    const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
    return userCredential.user;
}

export async function logout() {
    await signOut(getAuth());
    // -------- akan hit api di svelte , http://localhost:5173/logout untuk delete cookies jwt (network application cookies)
    await fetch('/logout') 

}

export async function registerWithEmailandPassword(email, password) {
    const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
    return userCredential.user;
}


export async function loginWithEmailandPassword(email, password) {
    const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
    return userCredential.user;
}

export async function mailResetPasswordEmail(email) {


    // bugFixForgotPassword : https://stackoverflow.com/questions/64343788/firebase-email-link-authentication-leads-to-a-page-that-says-error-encountered

    // let actionCodeSettings = {
    //     url: 'http://localhost:5173/login',
    //     handleCodeInApp: true
    // }

    // await sendPasswordResetEmail(getAuth(), email, actionCodeSettings)
    await sendPasswordResetEmail(getAuth(), email)
    // .then(() => {
    //     console.log("ok")
    //   // Password has been reset!
    //   // ..
    // })
    // .catch((error) => {
    //     console.log(error)
    // });



}


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