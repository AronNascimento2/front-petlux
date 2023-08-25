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
  width: 80%;
  @media (min-width: 768px) {
    padding: 0;

    width: 30%;
    height: 200px;
  }
  @media (max-width: 767px) {
    padding: 0;
    width: 80%;
    height: 120px;
    margin-bottom: 20px;
  }
`
export const Wrapper = styled.div`
  /* No arquivo onde você estiver estilizando */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  margin: 40px; /* Margem maior */
  /* Defina o máximo de 3 cartões por linha em telas maiores */
  /* Defina o máximo de 3 cartões por linha em telas maiores */
`
