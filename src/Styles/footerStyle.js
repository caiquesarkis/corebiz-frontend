import styled from 'styled-components'


export const FooterContainer = styled.div`
    height:11.09vw;
    background-color:black;


    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 600px){
        height:386px;
        margin-top:16px;

        flex-direction:column;
    }
` 


export const Location = styled.div`
    
`
export const LocationInfo = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight:400;
    font-size:0.7vw;

    @media (max-width:600px){
        font-size:13px;

    }
`

export const LocationTitle = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight:900;
    font-size:1.04vw;
    color:white;

    margin-top:1.3vw;
    
    display:flex;
    flex-direction: column;
    justity-content: left;

    @media (max-width:600px){
        font-size:18px;

    }
`

export const TitleBottonLine = styled.hr`
    
    width:3.3vw;
    height:4.3px;
    margin:0;
    margin-top:0.86vw;
    border:none;
    background-color:#C0C0C0;

    @media (max-width:600px){
        width:32px;

    }
`


/* Contact */

export const Contact = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center;


`

export const Email = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;

    width:10.16vw;
    height:2vw;
    border-radius:5px;
    background-color: white;

    color: black;
    font-family: 'Nunito', sans-serif;
    font-weight:600;
    font-size:.625vw;
    
    img{
        margin-right:20.7px;
    }

    @media (max-width:600px){
        width:198px;
        height:38px;

        font-size:12px;
        
    }   
`

export const Consultant = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;

    width:10.16vw;
    height:2vw;
    border-radius:5px;

    margin-top:1.3vw;
    background-color: white;

    color: black;
    font-family: 'Nunito', sans-serif;
    font-weight:600;
    font-size:.625vw;

    img{
        margin-right:20.7px;
    }

    @media (max-width:600px){
        width:198px;
        height:38px;

        font-size:12px;
        margin-top:26px;
    }   
`


export const Sponsor = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;

    width:8.24vw;
    height:1.8vw;

    @media (max-width:600px){
        p{
            font-size:10px;
        }
        width:224px;
        heigh:32px;

    }   
`

export const Vtex = styled.div`

    color: white;
    font-family: 'Nunito', sans-serif;
    font-size:.55vw;
    p{
        margin:0;
    }


`

export const Corebiz = styled.div`

    color: white;
    font-family: 'Nunito', sans-serif;
    font-size: .55vw;
    margin-right:1.3vw;

    p{
        margin:0;
    }

`