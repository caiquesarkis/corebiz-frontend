import styled from 'styled-components'


export const ShelfSection = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

export const ShelfContainer = styled.div`
    display:flex;
    flex-direction: row;
    max-width:1248px;
    margin-top:22px;

`

export const ShelfProducts = styled.div`
    display:flex;
    flex-direction:row;

    justify-content:space-between;
`

export const Product = styled.div`

    width:216px;
    height:353px;

    margin-right:99px;


    display:flex;
    flex-direction: column;

` 

export const ProductImg = styled.img`
    width:auto;
    height:57%;
`
export const ProductInfo = styled.div`
    background-color:white;
`



export const LeftArrow = styled.img`
    object-fit:none;
    margin-right:22px;


`

export const RightArrow = styled.img`
    object-fit:none;
    margin-left:-77px;
`


export const Shelf = styled.div`

`

export const ShelfTitle = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight:900;
    font-size:20px;

    display:flex;
    flex-direction: column;
    justity-content: left;
`

export const TitelBottonLine = styled.hr`
    width:3.3vw;
    height:4.3px;
    margin:0;
    border:none;
    background-color:#C0C0C0;
`