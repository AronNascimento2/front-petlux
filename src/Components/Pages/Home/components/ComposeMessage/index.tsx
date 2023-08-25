import React from 'react'
import * as S from './styles'

interface ComposeProps {
  messages: string[]
  isUser: boolean
}

const ComposeMessage: React.FC<ComposeProps> = ({ messages, isUser }) => {
  return (
    <S.Container>
      {messages.map((message, index) => (
        <S.BubbleContainer key={index} isUser={isUser}>
          <S.Avatar src="src/assets/petluxlogo.png" alt="Avatar" />
          <S.Bubble isUser={isUser}>
            <p>{message}</p>
          </S.Bubble>
        </S.BubbleContainer>
      ))}
    </S.Container>
  )
}

export default ComposeMessage
