import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

.container-inputs{
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    width: auto;
    padding-bottom: 1rem;

}
input{
    width:600px;
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem 0 1rem ;
    background: #CCCCCC;
    font-size: 18px;
   
}
.buttons-create{
    display: flex;
    padding: 1rem;
    gap: 1rem;
}
button{
    width:250px;
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem 0 1rem ;
    font-weight: 600;
    color: #000000;
    background-color:#FFB300;
    cursor: pointer;
    &:active{
        background-color:#FFD700;
    }
   
}
.cancel-button{
        background-color:#e4e6eb;
    }

`