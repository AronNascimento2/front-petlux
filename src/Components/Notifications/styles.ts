import styled from 'styled-components'

export const Dialog = styled.div`
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  width: 300px;
  height: 300px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 60px;
  right: 80px;
  color: black;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    .icon-close {
      cursor: pointer;
    }
  }
  background: #ffffff;
  p {
    font-weight: 600;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: block;
    z-index: 5;
    top: 80px;
    bottom: 0;
    right: 0;
    animation: slideIn 1s forwards;
  }
`
