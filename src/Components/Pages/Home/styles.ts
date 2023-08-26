import { styled } from 'styled-components'
import { Card } from '../../GlobalComponents'

export const Container = styled.div`
  background: #ffffff;
  overflow: auto;
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
  @media (max-width: 768px) {
    .content {
      position: relative; /* Garante que o espaço para o Chat seja reservado na altura */
    }

    .chat {
      position: fixed;
      bottom: 30px; /* Fixa o componente no fim da tela */
      right: 20px; /* Define uma margem direita para o componente */
    }
  }
`
export const StyledCard = styled(Card)`
  width: 400px;
  height: 200px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
  background-color: #192a56;

  gap: 0.5rem;
  margin: 0.5rem 1rem;
  .title {
    padding-bottom: 0.8rem;
    padding-left: 0.5rem;
    font-weight: 600;
    padding-left: 0%.5rem;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 188px;
    padding-bottom: 2rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;

  @media (max-width: 768px) {
    padding: 0;
    padding: 0;
  }
`
