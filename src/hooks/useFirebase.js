import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const FirebaseAuth = () =>{
    const [user, setUser] = useState({})
    const [error , setError] = useState('')
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInwithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user
            setUser(user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
    },[])

    const logoutProcess = () =>{
        signOut(auth).then(()=>{
            setUser({})
        })
        .catch((error)=>{
            setError(error.message)
        })
    }
    return {user, error, signInwithGoogle, logoutProcess}
}

export default FirebaseAuth;