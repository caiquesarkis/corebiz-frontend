import styled from "styled-components";

/* Banner section */
export const Banner = styled.div`
    height:22vw;

    width:100%;

    @media (max-width: 600px){
        height:192.7px;


    }
`
/* Img */

export const BannerImg = styled.img`
    display:block;
    float: right;
    height:inherit;
    max-height:100%;
    width: 52.6vw;
    
    @media (max-width: 600px){
        position:absolute;
        width:100%;
        height:inherit;
        filter: brightness(50%);
    }

`
/* Vector */


export const VectorBanner = styled.img`
    width: 51.2vw;
    height:inherit;
    position:absolute;
    z-index:0;
    max-height:100%;


    @media (max-width: 600px){
        display:none;

    }

`


/* Text */

export const BannerText = styled.div`
    
    color:white;
    position:absolute;
    text-align:left;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:inherit;
    z-index:1;

    @media (max-width: 600px){
        display:block;
        margin: 33.21px 0 0 20px;
    }

`

export const Br = styled.br`

    display:none;
    @media (max-width: 600px){
        display:block;

    }
`

export const SmallText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight:bold;
    font-size: 1.6vw;
    margin: 0 0 0 20vw;

    @media (max-width: 600px){
        margin:0;
        font-size:20px;
        line-height:1;
    }
` 

export const BigText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight:900;
    font-size: 2.3vw;
    margin: 0 0 0 20vw;

    @media (max-width: 600px){
        margin:0;
        font-size:30px;
        line-height:1;
    }
` 