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
