import { styled } from 'styled-components'

export const Container = styled.div`
  background: #ffffff;

  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  .content {
    position: relative; /* Garante que o espaço para o Chat seja reservado na altura */
  }

  .chat {
    position: fixed;
    bottom: 30px; /* Fixa o componente no fim da tela */
    right: 60px; /* Define uma margem direita para o componente */
  }
`
