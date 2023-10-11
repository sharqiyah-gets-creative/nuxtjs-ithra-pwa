import { getFirestore, initializeFirestore } from "firebase/firestore";

export const useFirestore = () => {

  const { firebaseApp } = useFirebase();
  
  initializeFirestore(firebaseApp, {
		experimentalForceLongPolling: true,
	});

  const firestore = getFirestore(firebaseApp);

  return {
    firestore,
  };
}