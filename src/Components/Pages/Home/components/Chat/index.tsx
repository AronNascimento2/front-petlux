import React, { useState } from 'react'
import * as S from './styles'
import MessageIcon from '@mui/icons-material/Message'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
import { Input } from '../../../../GlobalComponents'
import ComposeMessage from '../ComposeMessage'

type Props = {
  className: string
}

export const Chat: React.FC<Props> = ({ className }: Props) => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleOpenModal = () => {
    setShow(true)
  }

  const handleCloseModal = () => {
    setShow(false)
  }

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, message]) // Adiciona a nova mensagem ao histórico de mensagens
      setMessage('') // Limpa o campo de entrada
    }
  }

  return (
    <div>
      <S.Container onClick={handleOpenModal} className={className}>
        <MessageIcon color="info" className="icon" />
      </S.Container>
      {show && (
        <S.ChatWrapper>
          <S.ModalChat onClick={handleModalClick}>
            <div className="headerchat">
              <div className="infochat">
                <Avatar className="avatar" />
                <p>Aron Nascimento</p>
              </div>
              <div className="icon-close">
                <CloseIcon onClick={handleCloseModal} />
              </div>
            </div>
            <ComposeMessage isUser={false} messages={messages} />
            <Input
              onSend={handleSendMessage}
              value={message}
              onChange={handleMessageChange}
            />
          </S.ModalChat>
        </S.ChatWrapper>
      )}
    </div>
  )
}
