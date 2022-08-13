import styled from 'styled-components'


export const ShelfSection = styled.div`
    display:block;
    margin-left:17.5vw;
    margin-right:17.5vw;

    @media (max-width: 600px){
        height:390.22px;
        margin-left:7px;

        margin-top:16.22px;
    }
`

export const ShelfContainer = styled.div`
    display:flex;
    flex-direction: row;
    max-width:1vw;
    margin-bottom:3.6vw;

`

export const ShelfProducts = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:1.45vw;
    justify-content:space-between;
`

export const ProductImg = styled.img`
    width:auto;
    height:10.41vw;

    @media (max-width:600px){
        height:122px;
    }
`
export const ProductInfo = styled.div`
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center

    height:153px;
`

export const ProductHeader = styled.div`
    height:53px;
    display:flex;
    flex-direction:column;
    align-items:center;
` 

export const ProductName = styled.p`
    font-family:'Nunito' , sans-serif;
    font-weight:600;
    font-size:.625vw;
    color: #7A7A7A;

    margin:7px 0 0 0;


    
    @media (max-width: 600px){
        font-size:10px;
    }




`

export const Rating = styled.img`
    margin-top:4.65px;

`

export const ListPrice = styled.p`
    font-family:'Nunito' , sans-serif;
    font-size:.625vw;
    color: #7A7A7A;

    margin-top: .36vw;



    @media (max-width: 600px){
        font-size:11px;
    }
` 


export const ProductPrice = styled.p`
    font-family:'Nunito' , sans-serif;
    font-weight:900;
    font-size:.9375vw;
    color: black;

   

    @media (max-width: 600px){
        font-size:16px;
    }
`

export const ProductInstallments = styled.p`
    font-family:'Nunito' , sans-serif;
    font-weight:regular;
    font-size:.9375vw;
    color: #7A7A7A;

    margin:0;

    @media (max-width: 600px){
        font-size:11px;
    }
`

export const BuyButton = styled.button`
    width:6.525vw;
    height:1.69vw;

    margin-bottom:.75vw;
    margin-top:0;


    background-color:black;
    border:none;
    border-radius:0.26vw;

    visibility:hidden;

    color:white;

    &:hover{
        background-color:#444444;
    }

    @media (max-width: 600px){
        width:140px;
        height:36px;

        border-radius:5.57px;
        visibility:visible;
        
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

    @media (max-width: 600px){
        width:141.81px;
        height:263.66px;

        &:hover{
            cursor:pointer;
            ${ProductInfo} {
                background-color:white; 
              }
        }
    }

` 




export const LeftArrow = styled.img`
    object-fit:none;
    margin-right:22px;

    @media (max-width: 600px){
        display:none;
    }
`

export const RightArrow = styled.img`
    object-fit:none;
    margin-left:-55px;

    @media (max-width: 600px){
        display:none;
    }
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

    @media (max-width: 600px){
        width:32.5px;
    }



    
`