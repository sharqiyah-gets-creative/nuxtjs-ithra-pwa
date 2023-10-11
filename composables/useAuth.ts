import { getDocs, collection } from "firebase/firestore";

import { useFirebase } from "~/composables/useFirebase";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useUserStore } from "~/store/user";


export const useAuth = async (credentials: any,	method = '',  config = {}) => {

  const store = useUserStore();

	const error = ref<any | null>(null);
	const auth = getAuth();

	const registerOrLogin = async (email: string, password: string) => {
		try {
			// Try to sign in
			const userCredential = await signInWithEmailAndPassword(auth,credentials.email,credentials.password);
      
      store.user = userCredential.user;

			return userCredential.user;
		} catch (signInError) {
			// If sign-in fails, try to register
			try {
				const userCredential = await createUserWithEmailAndPassword(auth,credentials.email,credentials.password);

        store.user = userCredential.user;

				return userCredential.user;

			} catch (registerError) {
				error.value = registerError;
				return null;
			}
		}
	};

	return { registerOrLogin, error };

};
