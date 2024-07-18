
import admin from "firebase-admin";
// import serviceAccount from'./firebase-secrets.server.json'

// ----------- REV
// import serviceAccount from'$lib/firebase/firebase-secrets.server.json'
import { GOOGLE_SERVICE_ACCOUNT } from "$env/static/private";
// ----------- REV
if (admin.apps.length === 0) {

        admin.initializeApp({
            // @ts-ignore
            // ----------- REV
            // credential : admin.credential.cert(serviceAccount)
            credential : admin.credential.cert(JSON?.parse(GOOGLE_SERVICE_ACCOUNT) ?? '')
            // ----------- REV
        }) 



}

export const db = admin.firestore();
export const auth =  admin.auth();
export const storage =  admin.storage();

