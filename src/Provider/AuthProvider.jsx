import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading]=useState(true)
    // console.log(user)
    // singUp 
    const crateUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //signOut
    const signout =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // login
    const logIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    // update Profile 
    const updateUser =(updateprofile)=>{
        return updateProfile(auth.currentUser,updateprofile)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    

    const UserInfo ={
        user,
        crateUser,
        setUser,
        signout,
        logIn,
        updateUser,
        loading
        
    }

    return <AuthContext value={UserInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;