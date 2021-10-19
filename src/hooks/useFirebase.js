import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const FirebaseAuth = () =>{
    const [user, setUser] = useState({})
    const [error , setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    //For Google
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

    //Current user sign in
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

    //Logout Button
    const logoutProcess = () =>{
        signOut(auth).then(()=>{
            setUser({})
        })
        .catch((error)=>{
            setError(error.message)
        })
    }

    //for register
    const registerProcess = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user
            setUser(user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const emailHandle = e =>{
        setEmail(e.target.value)
    }

    const passwordHandle = e =>{
        setPassword(e.target.value)
    }


    return {user, error, signInwithGoogle, logoutProcess, emailHandle, passwordHandle, registerProcess}
}

export default FirebaseAuth;