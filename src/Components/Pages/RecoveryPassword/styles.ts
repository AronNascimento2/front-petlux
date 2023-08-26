import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;

  .container-logo {
    padding-bottom: 1rem;
  }

  .logo {
    width: 250px;
    border-radius: 50%;
  }

  .container-div {
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
  }
  .input,
  button {
    width: 300px;
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

  .buttons-recovery {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
  }

  button {
    background-color: #ffb300;
    cursor: pointer;
  }

  .cancel-button {
    background-color: #e4e6eb;
  }

  @media (max-width: 768px) {
    .logo {
      width: 200px;
    }

    .buttons-recovery {
      gap: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`
