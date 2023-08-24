import { styled } from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
.container-logo{
    padding-bottom: 1rem;
}
.logo{
    width: 320px;
    border-radius: 50%;
}
.container-div{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: auto;
}
.input{
    width:300px;
    height: 45px;
    border-radius: 30px;
    border: none;
    padding: 0 1rem 0 1rem ;
    background: #CCCCCC;
   
}
a{
    font-size: 12px;
    color: white;
    margin: 1rem;
    text-decoration:none;
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

`