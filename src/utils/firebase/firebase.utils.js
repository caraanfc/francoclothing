import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyA5qDy9Vv_H0gkPNC8pthovGgGaUmIgkd4",
        authDomain: "fcclothing-db-4b265.firebaseapp.com",
        projectId: "fcclothing-db-4b265",
        storageBucket: "fcclothing-db-4b265.appspot.com",
        messagingSenderId: "142786866498",
        appId: "1:142786866498:web:66a21f9dc453dc6c69acdb",
        measurementId: "G-21EQ243965"
      };
      

const firebaseApp = initializeApp(firebaseConfig);
      

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

  export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot =  await getDoc(userDocRef);


    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation
            });
        } catch (error){
            console.log('error creating the user',error.message);
        }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);