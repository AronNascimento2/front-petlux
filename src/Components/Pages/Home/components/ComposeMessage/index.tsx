import React, { useRef, useEffect } from 'react'
import * as S from './styles'

interface ComposeProps {
  messages: string[]
  isUser: boolean
}

const ComposeMessage: React.FC<ComposeProps> = ({ messages, isUser }) => {
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
      {messages.map((message, index) => (
        <S.BubbleContainer key={index} isUser={isUser}>
          <S.Avatar
            src="/front-petlux/assets/petluxlogo-135d622f.png"
            alt="Avatar"
          />
          <S.Bubble isUser={isUser}>
            <p>{message}</p>
          </S.Bubble>
        </S.BubbleContainer>
      ))}
    </S.Container>
  )
}

export default ComposeMessage
