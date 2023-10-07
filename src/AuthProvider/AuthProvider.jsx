import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState({})
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
    };


    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,(user)=>{
            setUser(user);
        });

        return()=>{
            unSubscriber()
        }

    },[]);

    const logOut = () =>{
        return signOut(auth);
    }

   

    const authInfo = {
        googleLogin,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;