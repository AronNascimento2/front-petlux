import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .container-logo {
    padding-bottom: 1rem;
  }

  .logo {
    width: 320px;
    border-radius: 50%;
  }

  .container-div {
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
  }

  .input {
    width: 490px;
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem;
    background: #cccccc;
    max-width: 100%;
    box-sizing: border-box;
  }

  a {
    font-size: 12px;
    color: white;
    margin: 1rem;
    text-decoration: none;
  }

  .buttons-recovery {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
  }

  button {
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem;
    font-weight: 600;
    color: #000000;
    background-color: #ffb300;
    cursor: pointer;

    &:active {
      background-color: #ffd700;
    }
  }

  .cancel-button {
    background-color: #e4e6eb;
  }

  @media (max-width: 768px) {
    .logo {
      width: 200px;
    }

    .input {
      width: 240px;
    }

    .buttons-recovery {
      gap: 0.5rem;
    }

    button {
      width: 100%;
      max-width: 300px;
      height: 40px; /* Aumentei a altura do botão */
    }
  }
`
