import { collection, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';

import { QueryPayload } from 'shared-data';
import { getAnalytics } from 'firebase/analytics';

let app;
if (!getApps()?.length) {
  app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  });
}
const analytics = getAnalytics(app);
const db = getFirestore();
export { db, collection, getDocs, getDoc, doc, query };
export default app;
