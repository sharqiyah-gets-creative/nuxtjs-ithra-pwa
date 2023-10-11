import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup
} from "firebase/auth";

import { useUserStore } from "~/store/user";

export const useAuth =  () => {
	const { firebaseApp } = useFirebase();
	const auth = getAuth(firebaseApp);
	console.countReset('🔥 useAuth')
	console.count('🔥 useAuth')
	
  	const store = useUserStore();
	console.count('🔥 useAuth');

	const error = ref<any | null>(null);
	

	console.count('🔥 useAuth')

	const registerOrLogin = async (email: string, password: string) => {
		try {
			
			// Try to sign in
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      		store.setUser(userCredential.user);

			return userCredential.user;
		} catch (signInError) {
			// If sign-in fails, try to register
			try {
				const userCredential = await createUserWithEmailAndPassword(auth, email, password);

				store.setUser(userCredential.user);

				return userCredential.user;

			} catch (registerError) {
				error.value = registerError;
				return null;
			}
		}
	};

	const loginWithGoogle = async () => {
		
		try {
			
			const provider = new GoogleAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);
			console.log(userCredential.user);

			store.setUser(userCredential.user);

			return userCredential.user;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	const signOut = async () => {
		try {
			
			await auth.signOut();
			store.clearUser();
		} catch (error) {
			console.log(error);
		}
	};

	return { registerOrLogin, loginWithGoogle, signOut, error };

};
