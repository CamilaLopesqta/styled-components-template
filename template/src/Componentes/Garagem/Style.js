import styled from "styled-components";

export const Botao = styled.button`
    background-color: orange;
    border: none;
    padding: 7px;

    &:hover{
        cursor: pointer;
        background-color: red;
    }
`

export const GaragemContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
`

export const Estacionamento = styled.section`
    display: grid;
    grid-template: 1fr 1fr/1fr 1fr;
    gap: 5rem;
    
    li {
        list-style: none;
    }
`