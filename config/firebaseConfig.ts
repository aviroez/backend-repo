import path from 'path';
import fs from 'fs';
import admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

const fileExists = (filePath: string) => {
    try {
        return fs.existsSync(filePath);
    } catch (err) {
        return false;
    }
};

// handling service_account on higher dir
let serviceAccountPath = path.resolve(process.cwd(), process.env.SERVICE_ACCOUNT || 'service_account.json');
for (let i = 0; i < 5; i++) {
    if (fileExists(serviceAccountPath)) {
        break;
    }
    serviceAccountPath = path.resolve(serviceAccountPath, '..');
}

const serviceAccount = require(serviceAccountPath) as ServiceAccount;

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const firebaseAdmin = admin.auth();
const firebaseDB = admin.firestore();

export { firebaseAdmin, firebaseDB };