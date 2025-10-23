import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	PUBLIC_API_KEY,
	PUBLIC_AUTH_DOMAIN,
	PUBLIC_PROJECT_ID,
	PUBLIC_STORAGE_BUCKET,
	PUBLIC_MESSAGE_ID,
	PUBLIC_APP_ID
} from "$env/static/public";

const firebaseConfig = {
	apiKey: PUBLIC_API_KEY,
	authDomain: PUBLIC_AUTH_DOMAIN,
	projectId: PUBLIC_PROJECT_ID,
	storageBucket: PUBLIC_STORAGE_BUCKET,
	messagingSenderId: PUBLIC_MESSAGE_ID,
	appId: PUBLIC_APP_ID,
};

if (!getApps().length) {
	initializeApp(firebaseConfig);
}
export const db = getFirestore();
