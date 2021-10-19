import { useContext } from "react"
import { ContextApi } from "../ContextProvider/AuthProvider"


const useAuth = () =>{
   return useContext(ContextApi)
}

export default useAuth;