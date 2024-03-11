import { PUBLIC_STORAGE_BUCKET } from '$env/static/public';
import { storage } from '$lib/firebase/firebase.server.js';
import fs from 'fs';
import { tmpdir } from 'os';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

/**
 * @param {string} destination
 * @param {File} file 
 */
export async function saveFiletoBucket(file, destination) {
    const filePath = await saveFiletoDisk(file);
    const uploadResult = await storage.bucket(PUBLIC_STORAGE_BUCKET)
        .upload(filePath, { destination, public: true });


    return uploadResult[0].publicUrl()

    // Toggle betwen public and private
    // await storage.bucket(PUBLIC_STORAGE_BUCKET)
    // .file(destination)
    // .makePublic() //  .makePrivate()



    // Download for a certain amount of timme
    // await storage.bucket(PUBLIC_STORAGE_BUCKET)
    //     .file(destination)
    //     .getSignedUrl({ expires: new Date('2023-07-07'), action: 'read' })

}

/**
 * 
 * @param {File} file 
 */
export async function saveFiletoDisk(file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer)
    const filePath = path.join(tmpdir(), uuidv4())

    fs.writeFileSync(filePath, buffer, 'base64')

    return filePath

}