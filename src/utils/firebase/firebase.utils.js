import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider } from 'firebase/auth';
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
      

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot =  await getDoc(userDocRef);


    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error){
            console.log('error creating the user',error.message);
        }
    }

    return userDocRef;
  };