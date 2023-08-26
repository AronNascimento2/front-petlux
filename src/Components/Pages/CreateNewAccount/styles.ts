import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;

  .container-inputs {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    width: auto;
    padding-bottom: 1rem;
  }

  input {
    width: 600px;
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem;
    background: #cccccc;
    font-size: 18px;
  }

  .buttons-create {
    display: flex;
    padding: 1rem;
    gap: 1rem;
  }

  button {
    width: 250px;
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
  .container-logo {
    padding-bottom: 1rem;
  }

  .logo {
    width: 250px;
    border-radius: 50%;
  }
  .cancel-button {
    background-color: #e4e6eb;
  }

  @media (max-width: 768px) {
    .logo {
      width: 200px;
    }
    .buttons-create {
      display: flex;
      width: 300px;
    }
    input {
      height: 35px;
      width: 100%; /* Preencher largura total */
    }

    button {
      width: 100%; /* Preencher largura total */
    }
  }
`
