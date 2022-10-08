import { useContext } from "react"
import { AuthContext } from "./AuthContext"

import { Container } from '../../styles/styles'
import { Link } from "react-router-dom"
import { IoArrowBackCircleOutline } from "react-icons/io5"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)

  if(!auth.user){
    return <Container>  <Link to="/"> <IoArrowBackCircleOutline /> Você não tem acesso</Link> </Container>

  }
  
  
  return children
}