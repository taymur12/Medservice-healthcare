import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

initializeAuthentication();

const FirebaseAuth = () =>{
    const [user, setUser] = useState({})
    const [error , setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setisLoading] = useState(true)
    
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
        .finally(()=>setisLoading(false))
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
            setisLoading(false)
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
        .finally(()=>setisLoading(false))
    }

    //for register
    const registerProcess = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user
            setUser(user)
        })
        .then(()=>setisLoading(false))
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

    //LoginProcess
    const LoginProcess = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => { 
    const user = result.user;
    setUser(user)
  })
  
  .catch((error) => {
    setError(error.message)
  });
  
    }


    return {user, error, signInwithGoogle, logoutProcess, emailHandle, passwordHandle, registerProcess, LoginProcess, isLoading}
}

export default FirebaseAuth;