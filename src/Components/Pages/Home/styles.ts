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
  @media (max-width: 767px) {
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
  overflow: auto;
  .title {
    padding-bottom: 0.5rem;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  gap: 0.5rem;
  margin: 1rem;
`
export const StyledInformations = styled(Card)`
  height: 40px;
  width: 350px;
  display: flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.5;
  background-color: gray; /* Cinza com transparência */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    width: 270px;
    margin-bottom: 20px;
  }
`
