import React, { useState, useEffect } from 'react'
import * as S from './styles'
import MessageIcon from '@mui/icons-material/Message'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
import { Input } from '../../../../GlobalComponents'
import { ComposeMessage } from '../ComposeMessage'

type Props = {
  className: string
}
export interface Message {
  text: string
  isClient: boolean
}
const initialMessages: Message[] = [
  {
    text: 'Olá! Como posso ajudar?',
    isClient: false
  }
]

export const Chat: React.FC<Props> = ({ className }: Props) => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleModal = () => {
    setShow(!show)
  }
  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      // Verificar se o clique ocorreu dentro do Dialog ou no botão de notificações.
      if (
        event.target.closest('.wrapper') === null &&
        event.target.closest('.icon') === null
      ) {
        setShow(!show)
      }
    }

    if (show) {
      window.addEventListener('click', handleDocumentClick)
    }

    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [show])

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage: Message = {
        text: message,
        isClient: true // Define isso como true para simular mensagens do usuário
      }
      setMessages((prevMessages) => [...prevMessages, newMessage])
      setMessage('')
    }
  }

  return (
    <div>
      <S.Container onClick={handleModal} className={className}>
        <MessageIcon color="info" className="icon" />
      </S.Container>
      {show && (
        <S.ChatWrapper className="wrapper">
          <S.ModalChat onClick={handleModalClick}>
            <div className="headerchat">
              <div className="infochat">
                <Avatar
                  className="avatar"
                  src="/front-petlux/assets/petluxlogo-135d622f.png"
                />
                <p>Atendente Petlux</p>
              </div>
              <div className="icon-close">
                <CloseIcon onClick={handleModal} />
              </div>
            </div>
            <ComposeMessage isClient={true} messages={messages} />
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
