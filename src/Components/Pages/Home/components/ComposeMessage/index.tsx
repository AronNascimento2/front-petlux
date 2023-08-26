import React, { useRef, useEffect } from 'react'
import * as S from './styles'

type ComposeProps = {
  messages: Message[]
  isClient: boolean
}
export type Message = {
  id?: number
  text: string
  isClient: boolean
}
export const ComposeMessage: React.FC<ComposeProps> = ({ messages }) => {
  const messageContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Mantém o scroll no final quando novas mensagens são adicionadas
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <S.Container ref={messageContainerRef}>
      {messages.map((message) => (
        <S.BubbleContainer key={message.id} isClient={message.isClient}>
          <S.Avatar
            src={
              message.isClient
                ? '/front-petlux/assets/Aronn1-ec7ee7e8.jpg'
                : '/front-petlux/assets/petluxlogo-135d622f.png'
            }
            alt="Avatar"
          />
          <S.Bubble isClient={message.isClient}>
            <p>{message.text}</p>
          </S.Bubble>
        </S.BubbleContainer>
      ))}
    </S.Container>
  )
}
