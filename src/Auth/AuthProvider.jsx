import { createContext, useEffect, useState } from "react";
import auth from "./Firebase-init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
 const registerWithPass = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }


 const loginUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);

 }


 const logOut = () => {
    return signOut(auth)
}


const forgotPass = (email) =>{
    return sendPasswordResetEmail(auth, email)
}



     const loginWithGoogle = () => {
       return signInWithPopup(auth,provider);
     }

  useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth,currentUser => {
        if(currentUser){
            console.log("currently Logged", currentUser)
            setUser(currentUser)
        }
        else{
            setUser(null);
            console.log("no login account")
        }
        setLoading(false);
      })
      return () => {
        unSubscribe();
      }
  },[])














  const  authInfo = {
    loading,
    user,
    registerWithPass,
    loginUser, 
    logOut,
    forgotPass,
    loginWithGoogle,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;