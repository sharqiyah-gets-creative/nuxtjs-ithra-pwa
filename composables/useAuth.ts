import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseError } from '@firebase/util'

export const useAuth = () => {
	const { firebaseApp } = useFirebase();
	const auth = getAuth(firebaseApp);

	const { setUser, clearUser } = useUserStore();
	const error = ref<Record<string, unknown> | null>(null);

	const registerOrLogin = async (email: string, password: string) => {
		try {
			// Try to sign in
            console.log('useAuth.ts', 'Trying to sign in')
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('useAuth.ts', 'User signed in:', userCredential.user)
			await setUser(userCredential.user);
            
			return userCredential.user;
		} 
        catch (loginError) {
            if (loginError instanceof FirebaseError) {
                console.log('useAuth.ts', 'FirebaseError:', loginError.code)
                if(loginError.code === 'auth/invalid-login-credentials') {
                    console.log('useAuth.ts', 'Invalid login credentials')
                }
             }
          
            console.log('useAuth.ts', 'Failed to sign in:', error)
			// If sign-in fails, try to register
			try {
                console.log('useAuth.ts', 'Trying to register')
				const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log('useAuth.ts', 'User registered:', userCredential.user)
				await setUser(userCredential.user);
				return userCredential.user;
			} catch (registerError: any) {
                if (error instanceof FirebaseError) {
                    console.log('useAuth.ts', 'FirebaseError:', error.code)
                    
                    if(error.code === 'auth/email-already-exists') {
                        console.log('useAuth.ts', 'Email already exists')
                        const toast = useToast()
                        toast.add({ color:'red', title:'خطأ!', description: 'البريد الإلكتروني مستخدم من!' })
                        
                        throw new Error('Email already exists');
                        return;
                    }
                    
                 }
                console.log('useAuth.ts', 'Failed to register:', registerError)
				error.value = registerError;
                throw new Error(registerError.code);
				return null;
			}
		}
	};

	const loginWithProvider = async (provider: any) => {
		try {
			const result = await signInWithPopup(auth, provider);
			await setUser(result.user);
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
