import styled from 'styled-components'

export const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  .icon {
    height: 80px;
    width: 40px;
  }
`

export const ModalChat = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 50px;
  right: 150px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .headerchat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px 20px 0 0;
    width: 100%;
    background: gray;
    height: 60px;

    .infochat {
      align-items: center;
      display: flex;
      gap: 0.5rem;
      color: #ffffff;
      margin: 1rem;
    }

    .icon-close {
      margin-right: 1rem;
      color: white;
      cursor: pointer;
    }

    .avatar {
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    border-radius: 0;
    bottom: 0;
    right: 0;
  }
`

export const ChatWrapper = styled.div`
  position: relative;
`
