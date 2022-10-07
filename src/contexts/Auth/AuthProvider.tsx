import { useEffect, useState } from "react"
import { api } from "../../service/api"
import { User } from "../../types/User"
import { AuthContext } from "./AuthContext"

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const AuthProvider = ({ children }:{ children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)

  const signin = async (email: string, password: string) => {

    const response = await api.get('users')
    const users = response.data

    const result = users.filter((user: IUser) => user.email === email && user.password === password)   

    if(result.length > 0) {
      setUser(result)
      setToken(result)
      return result
    }else{
      throw new Error
    }
  
  }

  const setToken = async (result: IUser[]) => {
    localStorage.setItem('user', JSON.stringify(result[0]))
  }

  const signout =  () => {
    localStorage.removeItem('user')
    setUser(null)
  }

   useEffect(()=>{
    const user = localStorage.getItem('user')
    if(user){
      const userToken = JSON.parse(user)
      setUser(userToken)
    }
   },[])

  return(
    <AuthContext.Provider value={{user, signin, signout}}>
      {children}
    </AuthContext.Provider>
  )








}