import { ButtonCustom } from './styles'

type Props = {
  onClick: (e: any) => void;
  icon: any;
  text: string;
}

export const Button = ({ onClick, icon, text }: Props) => {
  return (
    <ButtonCustom  onClick={onClick}>
      {icon}{text}
    </ButtonCustom>
  )
}