import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
     
    // Google login
    const googleLogin = () =>{
          return signInWithPopup(auth,googleProvider);
    };

    // email password sign up
    const signUpWithEmailAndPassword =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    // email password login
    const loginWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    const authInfo = {
        googleLogin,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;