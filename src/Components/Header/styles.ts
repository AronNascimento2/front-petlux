import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #192a56;
  height: 80px;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    list-style-type: none;
    gap: 1rem;
    a {
      color: white;
      text-decoration: none;
      font-weight: 400;
    }
  }
`
