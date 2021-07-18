import styled from 'styled-components'



export const NewsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    background-color:#F2F2F2;
    
    height:7.6vw;
    margin-top:3.6vw;
`

export const NewsForm = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    margin: 0.83vw;
` 

export const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight:bold;
    font-size:1.15vw;

    margin: 1.25vw 0 0 0;
`

export const TextInput = styled.input`
    width: 14.6vw;
    height: 2.5vw;
    margin-left:0.42vw;

    font-family: 'Lato' , sans-serif;
    font-weight:bold;
    font-size:0.65vw;
    border:none;
    border-radius:0.26vw;


`

export const SubmitButton = styled.button`

    background-color:black;
    color:white;

    width: 7.3vw;
    height: 2.5vw;
    margin-left:0.42vw;
    border:none;
    border-radius:0.26vw;

    font-family: 'Lato' , sans-serif;
    font-weight:bold;
    font-size:0.73vw;

    &:hover{
        background-color:#333333;
    }
`