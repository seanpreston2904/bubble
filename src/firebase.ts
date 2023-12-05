// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AuthError, GoogleAuthProvider, UserCredential, createUserWithEmailAndPassword, getAuth, getRedirectResult, signInWithEmailAndPassword, signInWithRedirect, signOut, updateProfile} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, getDoc} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

/**
 *  Helper function to obtain a user's profile photo
 * 
 * @param userUid the UID of the user
 */
export const getUserPhoto = async (userUid: string) => await getDownloadURL(ref(storage, "profilePhotos/"+userUid))

/**
 * Helper function to register a new user from Email and Password.
 * 
 * @param email the email to register against
 * @param password the password to use against registered account
 * @returns user credential upon successful registration
 */
export const registerUser = async (email: string, password: string, username: string, profilePhoto: File): Promise<UserCredential | AuthError>  => {

    try {

        // Obtain user credential.
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Upload profile photo and obtain URL.
        const profilePhotoRef = ref(storage, "profilePhotos/"+auth.currentUser!.uid);
        await uploadBytes(profilePhotoRef, profilePhoto)

        const profilePhotoURL = await getDownloadURL(ref(profilePhotoRef));

        // Update user profile with additional information.
        await updateProfile(
            auth.currentUser!,
            {
                displayName: username,
                photoURL: profilePhotoURL,
            }
        );

        return userCredential;

    } catch (e){
        return e as AuthError;
    }

}

/**
 * Helper function to log user out.
 */
export const logout = () => signOut(auth);

export const signIn = async (email: string, password: string) => {

    try{

        // Sign the user in.
        await signInWithEmailAndPassword(auth, email, password);

    } catch (e) {
        return e as AuthError;
    }

}

export {
    auth,
    db,
  };