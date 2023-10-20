import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

export const useAuth = () => {
	const { firebaseApp } = useFirebase();
	const auth = getAuth(firebaseApp);

	const { setUser, clearUser } = useUserStore();
	const error = ref<Record<string, unknown> | null>(null);

	const registerOrLogin = async (email: string, password: string) => {
		try {
			// Try to sign in
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			setUser(userCredential.user);
			return userCredential.user;
		} 
        catch (signInError) {
			// If sign-in fails, try to register
			try {
				const userCredential = await createUserWithEmailAndPassword(auth, email, password);
				setUser(userCredential.user);
				return userCredential.user;
			} catch (registerError: any) {
				error.value = registerError;
				return null;
			}
		}
	};

	const loginWithProvider = async (provider: any) => {
		try {
			const result = await signInWithPopup(auth, provider);
			setUser(result.user);
			return result;
		} 
        catch (error) {
			console.log(error);
			return null;
		}
	};

	const loginWithAuthProvider = (provider: string) => {
		switch (provider) {
			case 'google':
				const provider = new GoogleAuthProvider();
				provider.addScope('profile');
				loginWithProvider(provider);
				break;

			case 'twitter':
				loginWithProvider(new TwitterAuthProvider());
				break;

			case 'facebook':
				loginWithProvider(new FacebookAuthProvider());
				break;

			default:
				break;
		}
	};

	const signOut = async () => {
		try {
			await auth.signOut();
			clearUser();
		} 
        catch (error) {
			console.log(error);
		}
	};

	return { registerOrLogin, loginWithAuthProvider, signOut, error };
};
