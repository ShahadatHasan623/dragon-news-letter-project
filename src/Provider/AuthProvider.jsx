import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    console.log(user)
    // singUp 
    const crateUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //signOut
    const signout =()=>{
        return signOut(auth)
    }

    // login
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword (auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
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
        logIn
        
    }

    return <AuthContext value={UserInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;