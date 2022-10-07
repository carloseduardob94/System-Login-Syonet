import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BiLogIn } from 'react-icons/bi'

import { Container } from './styles'

import { Input } from '../Input'
import { Button } from '../Button'
import { useAuth } from '../../hooks/useAuth'

export const ProjectForm = () => {
  const {signin} = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()

    try{
      const data = await signin(email, password)
      console.log(data)
      navigate('users')
      
    }catch(error){
      console.log(error)
      alert('Email ou senha inválido')
    }
  
  }
  


  return (
    <Container>
      <Input 
        type="email"
        name="email"
        id="email"
        text="Insira o email de login"
        placeholder="Coloque seu email de login aqui"
        handleOnChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Input 
        type="password"
        name="password"
        id="password"
        text="Insira a senha de login"
        placeholder='Coloque sua senha de login aqui'
        handleOnChange={e => setPassword(e.target.value)}
        value={password}
      />
      <Button
        icon={<BiLogIn />} 
        text="Login"
        onClick={handleLogin}
      />
      <div>
        <p>Não possui conta?</p>
        <Link to="/signin" >Fazer Cadastro</Link>
      </div>
    </Container>
  )
}