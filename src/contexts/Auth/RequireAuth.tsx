import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)

  if(!auth.user){
    return <h2>Você não tem acesso</h2>
  }
  
  
  return children
}