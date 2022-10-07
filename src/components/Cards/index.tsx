import { Container } from './styles'

type Props = {
  userName: string
  userEmail: string
}

export const Cards = ({ userName, userEmail }: Props) => {
  return (
    <Container>
      <h2>Nome do usuário:</h2>
      <p>{userName}</p>
      <h2>Email do usuário:</h2>
      <p>{userEmail}</p>
    </Container>
  )
}
