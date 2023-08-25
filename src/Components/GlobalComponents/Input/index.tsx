import React, { ChangeEvent, KeyboardEvent } from 'react'
import { InputContainer, InputText } from './styles'
import SendIcon from '@mui/icons-material/Send'

interface InputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSend: () => void
}

const Input: React.FC<InputProps> = ({ value, onChange, onSend }) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Evita que o formulário seja submetido
      onSend()
    }
  }

  return (
    <InputContainer>
      <InputText
        type="text"
        placeholder="Digite sua mensagem..."
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <SendIcon className="icon" onClick={onSend} />
    </InputContainer>
  )
}

export default Input
