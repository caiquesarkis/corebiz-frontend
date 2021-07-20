import styled from 'styled-components'


/* Header section */

export const  Sandwich = styled.img`
    visibility:hidden;

    @media (max-width: 600px){
        position:absolute;
        visibility:visible;
        margin: 15px 0 0 20px;
    }
`


export const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    height:5vw;


    @media (max-width: 600px){
        display:block; 
        height:80px;
    }
`


/* Corebiz Logo */

export const CorebizLogo = styled.img`
    width:181px;
    height:41px;

    @media (max-width:600px){
        width:109px;
        height:25px;
        margin-top:7px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }
`


/* Search bar */


export const Busca = styled.div`
    margin-left :121px;
    border-bottom: 1px solid #7A7A7A;
    width:728px;
    height:23px;

    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    text-align: center;

    p{
        color:#7A7A7A;
    }

    @media (max-width:600px){
        width:280px;
        height:22px;
        position: absolute;
        margin: 47px 0 0 0;
        left: 50%;
        transform: translate(-50%, 0);
    }
    
`

export const SearchText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight:regular;
`

export const SearchIcon = styled.img`

`

/* Login */

export const Login = styled.div`
    margin-left:43px;
    display:flex;
    flex-direction:row;

    @media (max-width:600px){
        display:none;
    }

`

export const LoginIcon = styled.img`
    align-self:center;
`

export const LoginText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight:regular;
    margin-left:5px;
    color:#7A7A7A;
`


/* MiniCart */

export const MiniCart = styled.div`
    margin-left:21px;
    display:flex;
    flex-direction:row;


    @media (max-width:600px){

        position: absolute;
        margin: 15px 0 0 263px;

    }


`

export const MiniCartIcon = styled.img`
    align-self:center;
`

/* MiniCart item counter */

export const MiniCartCounter = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-left:14px;
    color:white;
`
export const CounterEllipse = styled.div`
    background-color: #F8475F;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    position:absolute;
    z-index:-1;
`

export const MiniCartCounterText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight:bold;
    align-self:center;
    position:absolute;
    font-size:10px;

`