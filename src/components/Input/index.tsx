import { Container } from './styles'

type Props ={
  name: string;
  text: string;
  placeholder: string;
  value?: string;
  type: string;
  handleOnChange: (e: any) => void;
  id: string;
}

export const Input = ({ name, text, placeholder, handleOnChange, value, type, id }: Props) => {
  return (
    <Container>
      <label htmlFor={name}>{text}:</label>
      <input 
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </Container>
  )
}