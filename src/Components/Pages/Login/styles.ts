import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
    width: auto;
  }
  .input {
    width: 300px;
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem 0 1rem;
    background: #cccccc;
  }
  a {
    font-size: 12px;
    color: white;
    margin: 1rem;
    text-decoration: none;
  }
  button {
    width: 250px;
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem 0 1rem;
    font-weight: 600;
    color: #000000;
    background-color: #ffb300;
    cursor: pointer;
    &:active {
      background-color: #ffd700;
    }
  }
`
