import { styled } from 'styled-components'

export const Container = styled.div`
  height: 400px;
  background: #ffffff;
  overflow: auto;
`

export const BubbleContainer = styled.div<{ isClient: boolean }>`
  display: flex;
  flex-direction: ${({ isClient }) => (!isClient ? 'row' : 'row-reverse')};
  align-items: flex-end;
`

export const Bubble = styled.div<{ isClient: boolean }>`
  background-color: ${({ isClient }) => (!isClient ? '#d1d1d1' : 'green')};
  border-radius: ${({ isClient }) =>
    !isClient ? '30px 30px 30px 0;' : '30px 30px 0 30px'};
  color: ${({ isClient }) => (!isClient ? 'black' : 'white')};
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
