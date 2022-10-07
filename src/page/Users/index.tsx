import { useNavigate } from "react-router-dom"
import { Cards } from "../../components/Cards"
import { useAuth } from "../../hooks/useAuth"
import { Container } from "./styles"

import Logo from '../../img/syonet-logo.png'
import {  useEffect, useState } from "react"
import { api } from "../../service/api"
import { IUser } from "../../contexts/Auth/AuthProvider"
import { Button } from "../../components/Button"
import { BiLogOut } from 'react-icons/bi'

export const Users = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [users, setUsers] = useState([])
  const {signout} = useAuth()

  const handleLogout = () => {
    signout()
    navigate('/')
  }

  const getNames = async () => {
    const response = await api.get('users')
    const users = response.data
    setUsers(users)
  }


  useEffect(()=>{
    const userLocalStorage = JSON.parse(localStorage.getItem('user')!) as IUser
    setUserName(userLocalStorage.name)
    getNames()
  }, [])
  

  return (
  <Container>
    <header>
      <div id="containerHeader">
        <img src={Logo} alt="syonet image" />
        <p>Bem-vindo, <span>{userName}</span></p>
      </div>
      <Button 
        onClick={handleLogout} 
        icon={<BiLogOut />}
        text="Logout"
      /> 
    </header>
    <div>
      {users.length > 0 && users.map((user: IUser) => (
        <Cards userName={user.name} userEmail={user.email} key={user.id}/>
      ))}
    </div>
  </Container>)
}