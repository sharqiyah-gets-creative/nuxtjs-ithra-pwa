import { FirebaseOptions, initializeApp, getApps, FirebaseApp } from "firebase/app";

export const useFirebase = () => {
	const { $config } = useNuxtApp();

	const firebaseConfig: FirebaseOptions = {
		apiKey: $config.public.GOOGLE_API_KEY,
		authDomain: $config.public.GOOGLE_AUTH_DOMAIN,
		projectId: $config.public.GOOGLE_PROJECT_ID,
		storageBucket: $config.public.GOOGLE_STORAGE_BUCKET,
		messagingSenderId: $config.public.GOOGLE_MESSAGING_SENDER_ID,
		appId: $config.public.GOOGLE_APP_ID,
		measurementId: $config.public.GOOGLE_MEASUREMENT_ID,
	};

	// Initialize Firebase if it hasn't been already
	let firebaseApp: FirebaseApp;
	
	if(getApps().length == 0){
		firebaseApp = initializeApp(firebaseConfig);
	}else{
		firebaseApp = getApps()[0];
	}

	firebaseApp = initializeApp(firebaseConfig);

	return {
		firebaseApp,
	};
};