import { ProjectForm } from "../../components/ProjectForm"
import { Container } from './styles'

import Logo from '../../img/syonet-logo.png'



export const Home = () => {
  
  return (
  <Container>
    <img src={Logo} alt="syonet logo" />
    <ProjectForm />
  </Container>
  )
}