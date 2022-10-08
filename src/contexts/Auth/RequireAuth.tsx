import { useContext } from "react"
import { AuthContext } from "./AuthContext"

import { Container } from '../../styles/styles'
import { Link } from "react-router-dom"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)

  if(!auth.user){
    return <Container> <Link to="/">Você não tem acesso</Link> </Container>

  }
  
  
  return children
}