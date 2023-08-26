import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border-top: 1px solid #ccc;
  border-radius: 0 0 20px 20px;
  padding: 10px;
  .icon {
    cursor: pointer;
    color: #128c7e;
    &:hover {
      color: #0f725a;
    }
  }
`

export const InputText = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 20px;
  outline: none;

  ::placeholder {
    color: #aaa;
  }
`
export const Container = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
