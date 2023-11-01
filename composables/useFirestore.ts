import { doc, getFirestore, initializeFirestore, setDoc, updateDoc } from 'firebase/firestore';

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

export const saveUserInFirestore = async (user: IUser): Promise<boolean> => {
    const { firestore } = useFirestore();

    try {
        const userRef = doc(firestore, 'users', user.uid);
        console.log('useFirestore.ts', 'Saving user:', user)
        await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
        });
        return true;
    } catch (error: any) {
        console.error('useFirestore.ts', 'Error saving user:', error);
        return false;
    }
}