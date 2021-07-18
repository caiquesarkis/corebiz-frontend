import styled from 'styled-components'


export const ShelfSection = styled.div`
    display:block;
    margin-left:17.5vw;
    margin-right:17.5vw;
`

export const ShelfContainer = styled.div`
    display:flex;
    flex-direction: row;
    max-width:1vw;
    heigh:36vw;

`

export const ShelfProducts = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:1.45vw;
    justify-content:space-between;
`

export const ProductImg = styled.img`
    width:auto;
    height:57%;
`
export const ProductInfo = styled.div`
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center

    height:7.97vw;
`


export const ProductName = styled.p`
    font-family:'Nunito' , sans-serif;
    font-weight:600;
    font-size:.625vw;
    color: #7A7A7A;

    margin-top:0.36vw;

    height:2.76vw;
`


export const ProductPrice = styled.p`
    font-family:'Nunito' , sans-serif;
    font-weight:900;
    font-size:.9375vw;
    color: black;

    margin-bottom:0.21vw;
`

export const ProductInstallments = styled.p`
    font-family:'Nunito' , sans-serif;
    font-weight:regular;
    font-size:.9375vw;
    color: #7A7A7A;

    margin:0 0 0.42vw 0;
`

export const BuyButton = styled.button`
    width:6.525vw;
    height:1.69vw;

    margin-bottom:0.75vw;

    background-color:black;
    border:none;
    border-radius:0.26vw;

    visibility:hidden;

    color:white;

    &:hover{
        background-color:#444444;
    }

    


`


export const Product = styled.div`

    width:11.25vw;
    height:18.38vw;

    margin-right:5.16vw;


    display:flex;
    flex-direction: column;

    &:hover{
        cursor:pointer;
        ${ProductInfo} {
            background-color: #E6E8EA;
          }
        ${BuyButton} {
            visibility:visible;
        }
    }

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

    margin-top:1.3vw;
    display:flex;
    flex-direction: column;
    justity-content: left;
`

export const TitleBottonLine = styled.hr`
    width:3.3vw;
    height:4.3px;
    margin:0;
    border:none;
    background-color:#C0C0C0;
`