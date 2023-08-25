import { styled } from 'styled-components'

export const Container = styled.div`
  height: 400px;
  background: #ffffff;
  overflow: auto;
`

export const BubbleContainer = styled.div<{ isUser: boolean }>`
  display: flex;
  flex-direction: ${({ isUser }) => (isUser ? 'row-reverse' : 'row')};
  align-items: flex-end;
`

export const Bubble = styled.div<{ isUser: boolean }>`
  background-color: #d1d1d1; /* Defina a cor de fundo cinza mais claro aqui */
  border-radius: 10px 10px 10px 0;
  padding: 10px;
  margin: 5px;
  min-width: 50px;
  max-width: 70%;
  word-wrap: break-word;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Adicione a sombra aqui */
`

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 8px;
`
