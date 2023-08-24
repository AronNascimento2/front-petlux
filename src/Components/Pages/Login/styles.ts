import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .password-input {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%; /* Defina a largura total para o input-container */
  }

  .password-toggle {
    color: black;
    position: absolute;
    top: 55%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .lost-password {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .button-group {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    margin-top: 1rem;
  }

  .create-button {
    background: #808080;
    color: #ffffff;
  }

  .container-logo {
    padding-bottom: 1rem;
  }

  .logo {
    width: 320px;
    border-radius: 50%;
  }

  .container-div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    width: auto;
  }

  .input,
  button {
    width: 300px; /* Mesmo tamanho para inputs e botões */
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem;
    font-weight: 600;
  }

  .input {
    background: #cccccc;
  }

  a {
    font-size: 12px;
    color: white;
    margin: 1rem;
    text-decoration: none;
  }

  button {
    color: #000000;
    background-color: #ffb300;
    cursor: pointer;

    &:active {
      background-color: #ffd700;
    }
  }

  @media (max-width: 768px) {
    .logo {
      width: 200px;
    }

    .container-div {
      align-items: center;
    }

    .input,
    button {
    }

    .button-group {
      gap: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 0.5rem;
    }

    button {
      height: 50px;
      font-size: 14px;
    }
  }
`
