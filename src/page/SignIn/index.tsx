import { Container } from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Logo from '../../img/syonet-logo.png'

import { Input } from "../../components/Input"
import { Button } from '../../components/Button'

import { IoArrowBackCircleOutline, IoCreateOutline } from "react-icons/io5";
import { api } from '../../service/api'

export const SignIn = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const minCharacters = /^.{8,}$/
  const specialCharacters = /[#$@!%&*?]/
  const oneUppercase = /[A-Z]/


  const handleRegister = async (e: any) => {
    e.preventDefault()
    if(!minCharacters.test(password)){
      alert("A senha precisa ter mínimo de 8 caracteres.")
      
    }else if(!specialCharacters.test(password)){
      alert("A senha precisa de pelo menos um caractere especial.")
      
    }else if(!oneUppercase.test(password)){
      alert("A senha precisa ter no mínimo uma letra minúscula.")
      
    }else if(password != confirmPassword){
      alert("Confirmação de senha inválida.")

    }else if(minCharacters.test(password) && specialCharacters.test(password) && oneUppercase.test(password) && password == confirmPassword ){

      const user = {
          "id": uuid(),
          "name": name,
          "email": email,
          "password": password   
      }

      try{
          const { status, data } = await api.post('users', user)
          console.log(data)
          navigate('/')
          alert("Usuário criado com sucesso.")
        }
        catch(error){
          console.log(error)
        }
    }
  }

  const handleBack = async (e: any) => {
    e.preventDefault()
    navigate('/')   
  }

  return (
  <Container>
    <img src={Logo} alt="syonet logo" />
    <Input 
      type="text"
      name="text"
      id="name"
      text="Primeiro nome"
      placeholder="Coloque aqui seu primeiro nome"
      handleOnChange={e => setName(e.target.value)}
      value={name}
    />
    <Input 
      type="email"
      name="email"
      id="email"
      text="Email"
      placeholder="Coloque aqui um email válido"
      handleOnChange={e => setEmail(e.target.value)}
      value={email}
    />
    <Input 
      type="password"
      name="password"
      id="password"
      text="Senha"
      placeholder="Mínimo 8 caracteres com 1 maiúsculo, 1 número e 1 especial"
      handleOnChange={e => setPassword(e.target.value)}
      value={password}
    />
    <Input 
      type="password"
      name="password"
      id="confirmPassword"
      text="Confirme a senha"
      placeholder="Confirme a sua senha aqui"
      handleOnChange={e => setConfirmPassword(e.target.value)}
      value={confirmPassword}
    />
    <div id="buttonsContainer">
      <Button
        icon={<IoArrowBackCircleOutline />}
        text="Já sou cadastrado"
        onClick={handleBack}
      />
      <Button
        icon={<IoCreateOutline />}
        text="Cadastrar"
        onClick={handleRegister}
      />
    </div>
  </Container>
  )
}