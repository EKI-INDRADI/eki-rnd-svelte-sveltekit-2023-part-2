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