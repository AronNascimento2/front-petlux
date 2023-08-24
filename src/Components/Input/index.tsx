import { InputContainer, Input } from './styles'
import SendIcon from '@mui/icons-material/Send'

export const Inputtext = () => {
  return (
    <InputContainer>
      <Input type="text" placeholder="Digite sua mensagem..." />
      <SendIcon className="icon" />
    </InputContainer>
  )
}
