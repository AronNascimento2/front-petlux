import { styled } from 'styled-components'

export const StyledInformations = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  min-height: 70px;
  background-color: rgba(200, 200, 200, 0.5); /* Cinza claro transparente */
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  border-radius: 10px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
  .line {
    padding-left: 1rem;
    height: 30px;
    border-right: 1px solid #ffffff;
  }
  .description {
    padding-left: 1rem;
  }
  @media (max-width: 767px) {
    align-items: center; /* Alinha os elementos ao final */
  }
`
export const BackgroundOverlay = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    width: 270px;
  }
`
