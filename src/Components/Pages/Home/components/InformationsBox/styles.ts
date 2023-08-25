import { styled } from 'styled-components'

export const StyledInformations = styled.div`
  display: flex;
  @media (max-width: 767px) {
    align-items: flex-end; /* Alinha os elementos ao final */
  }

  .container {
    display: flex;
    line-height: 1px;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    border-right: 1px solid #ffffff;
    padding-right: 0.5rem;
    color: #ffffff;
  }
  .description {
    color: #ffffff;

    padding-left: 0.5rem;
  }
`
export const BackgroundOverlay = styled.div`
  height: 30px;
  width: 350px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(200, 200, 200, 0.5); /* Cinza claro transparente */
  margin-bottom: 0.5rem;
  @media (max-width: 767px) {
    width: 270px;
  }
`
