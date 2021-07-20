import styled from 'styled-components'



export const NewsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    background-color:#F2F2F2;
    
    height:7.6vw;
    margin-top:3.6vw;

    @media (max-width: 600px){
        height:276px;

    }
`

export const NewsForm = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    margin: 0.83vw;

    @media (max-width: 600px){
        flex-direction: column;
    }
` 

export const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight:bold;
    font-size:1.15vw;
    color:#333333;

    margin: 1.25vw 0 0 0;

    @media (max-width: 600px){
        font-size:22px;
        margin: 24px 0 -3px 16px;

    }
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

    @media (max-width: 600px){
        height:48px;
        width:288px;

        font-size:12px;
        border-radius:5px;

        margin-top: 22px;

    }

`

export const SubmitButton = styled.button`

    background-color:black;
    color:white;

    width: 7.3vw;
    height: 2.5vw;
    
    border:none;
    border-radius:0.26vw;

    font-family: 'Lato' , sans-serif;
    font-weight:bold;
    font-size:0.73vw;

    &:hover{
        background-color:#333333;
    }


    @media (max-width: 600px){
        height:48px;
        width:288px;

        font-size:14px;
        border-radius:5px;

        margin-top:7px;


    }
`