import * as S from '../Styles/newsStyle'

import { useState } from 'react'
import axios from "axios"

export default function News(props){

    const [name , setName ] = useState("");
    const [ nameErro, setNameErro ] = useState(false);

    const [ email , setEmail] = useState("");
    const [ emailErro, setEmailErro] = useState(false);

    
    function sendEmail(){
        if (name == ""){
            setEmailErro(true);
            setNameErro(true)
        }else{
            const info = {
                name : name,
                email : email
            }
            axios.post("https://corebiz-test.herokuapp.com/api/v1/newsletter", info).then( response => {
                console.log(response)
            }).catch( err => {
                setEmailErro(true);
                setNameErro(true)
            })
        }
        
    }

    function handleName(e){
        setName(e.target.value)
        console.log(name)
    }

    function handleEmail(e){
        setEmail(e.target.value)
        console.log(email)
    }
    return(
        <S.NewsContainer>
            <S.Title>
                Participe de nossas news com promoções e novidades!
            </S.Title>
            <S.NewsForm>
                <S.ErrorGroup>
                    <S.TextInput placeholder='Digite seu nome' type="text" name="name" value={name}  onChange={handleName}/>
                    { nameErro ? <S.NameErrorMsg>Preencha com seu nome completo</S.NameErrorMsg> : ''}
                </S.ErrorGroup>

                <S.ErrorGroup>
                    <S.TextInput placeholder='Digite seu email' type="email" inputmode="email" name="email" autocomplete="username" value={email} onChange={handleEmail}/>          
                    { emailErro ? <S.EmailErrorMsg>Preencha com um email válido</S.EmailErrorMsg> : ''}
                </S.ErrorGroup>
                
                <S.SubmitButton type="button" onClick={sendEmail}>Eu quero!</S.SubmitButton>

                

                

            </S.NewsForm>
            
                

        </S.NewsContainer>
        
    )
}