import { getFirestore, initializeFirestore } from 'firebase/firestore';

let isFirestoreInitialized = false;

export const useFirestore = () => {
	const { firebaseApp } = useFirebase();

	if (!isFirestoreInitialized) {
		initializeFirestore(firebaseApp, {
			experimentalForceLongPolling: true,
		});
		isFirestoreInitialized = true;
	}
	const firestore = getFirestore(firebaseApp);

	return {
		firestore,
	};
};
