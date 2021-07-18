import styled from 'styled-components'


/* Header section */

export const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    height:5vw;
`


/* Corebiz Logo */

export const CorebizLogo = styled.img`
    width:181px;
    height:41px;
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