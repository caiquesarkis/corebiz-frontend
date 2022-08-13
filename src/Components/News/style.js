import styled from 'styled-components'



export const NewsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    background-color:#F2F2F2;
    
    height:7.6vw;

    


    @media (max-width: 600px){
        height:276px;

    }
`

export const NewsForm = styled.form`
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

    margin-left:8px;

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
export const EmailErrorMsg = styled.p`
    position:absolute;
    margin:0;
    font-family: "Lato" , sans-serif;
    font-size: .625vw;
    color:#D7182A;

    margin-left:.425vw;
    margin-top:.42vw;

    @media (max-width: 600px){
        display:none;
    }
`

export const NameErrorMsg = styled.p`
    position:absolute;  
    margin:0;
    font-family: "Lato" , sans-serif;
    font-size: .625vw;
    color:#D7182A;

    margin-left:.425vw;
    margin-top:.42vw;

    @media (max-width: 600px){
        display:none;
    }
`

export const SuccessContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center;
`

export const SuccessTitle = styled.p`
    font-family: 'Lato' , sans-serif;
    font-weight:900;
    font-size:0.73vw;
    color:black;
    margin-bottom:0;
    margin-top:1.7vw;

`

export const SuccessSubTitle = styled.p`
    font-family: 'Lato' , sans-serif;
    font-size:0.625vw;
    color:#333333;
    margin-top:0;

`

export const SuccessButton = styled.button`
    background-color:black;
    width:17.08vw;
    height: 2.5vw;

    border:none;
    border-radius:5px;

    font-family: 'Lato' , sans-serif;
    font-weight:900;
    font-size:0.73vw;
    color: white;

    margin:none;

    &:hover{
        background-color:#333333;
    }
`