import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth"
//import { getAnalytics } from "firebase/analytics"

export const useFirebase = (config: any) => {
	const firebaseConfig = {
		apiKey: config.public.GOOGLE_API_KEY,
		authDomain: config.public.GOOGLE_AUTH_DOMAIN,
		projectId: config.public.GOOGLE_PROJECT_ID,
		storageBucket: config.public.GOOGLE_STORAGE_BUCKET,
		messagingSenderId: config.public.GOOGLE_MESSAGING_SENDER_ID,
		appId: config.public.GOOGLE_APP_ID,
		measurementId: config.public.GOOGLE_MEASUREMENT_ID,
	};

	const firebaseApp = initializeApp(firebaseConfig);

	initializeFirestore(firebaseApp, {
		experimentalForceLongPolling: true,
	});

	const firestore = getFirestore(firebaseApp);

	return {
		firebaseApp,
		firestore,
	};
};
