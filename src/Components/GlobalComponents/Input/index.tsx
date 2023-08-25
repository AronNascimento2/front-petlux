import { InputContainer, InputText } from './styles'
import SendIcon from '@mui/icons-material/Send'

const Input = () => {
  return (
    <InputContainer>
      <InputText type="text" placeholder="Digite sua mensagem..." />
      <SendIcon className="icon" />
    </InputContainer>
  )
}
export default Input
