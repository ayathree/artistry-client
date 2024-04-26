import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider =new  GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    const google = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const github=()=>{
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const allInfo={user, createUser, loading, signIn, logOut, google, github}
    return (
       <AuthContext.Provider value={allInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;