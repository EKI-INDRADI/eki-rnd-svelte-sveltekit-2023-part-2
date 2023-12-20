import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

export async function LoginWithGoogle() {
    const auth = getAuth();
    const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
    return userCredential.user;
}
