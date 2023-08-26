import React, { ChangeEvent, KeyboardEvent } from 'react'
import SendIcon from '@mui/icons-material/Send'
import * as S from './styles'
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
    <S.InputContainer>
      <S.InputText
        type="text"
        placeholder="Digite sua mensagem..."
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <S.Container>
        <SendIcon className="icon" onClick={onSend} />
      </S.Container>
    </S.InputContainer>
  )
}

export default Input
