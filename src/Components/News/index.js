import * as S from './style'

import { useState } from 'react'
import axios from "axios"

export default function News(props){

    const [validForm, setValidForm] = useState(false);
    const [name, setName] = useState("");
    const [nameErro, setNameErro] = useState(false);
    const [email, setEmail] = useState("");
    const [emailErro, setEmailErro] = useState(false);
    
    function sendEmail(){
        if (name === ""){
            setEmailErro(true);
            setNameErro(true);
        }else{
            const info = {
                name : name,
                email : email
            }
            axios.post("https://corebiz-test.herokuapp.com/api/v1/newsletter", info).then( response => {
                console.log(response)
            }).catch( err => {
                setEmailErro(true);
                setNameErro(true);
            })

            setValidForm(true)
        }
    }

    function handleName(e){
        setName(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function reset(){
        setValidForm(false)
    }
    return(
        <S.NewsContainer>
            {!validForm ? <S.Title>
                Participe de nossas news com promoções e novidades!
            </S.Title>
            : <></>
            }

            { !validForm ?  <S.NewsForm>
                <S.TextInput placeholder='Digite seu nome' type="text" name="name" value={name}  onChange={handleName}/>
                { nameErro ? <S.NameErrorMsg>Preencha com seu nome completo</S.NameErrorMsg> : ''}
          
                <S.TextInput placeholder='Digite seu email' type="email" inputmode="email" name="email" autocomplete="username" value={email} onChange={handleEmail}/>          
                { emailErro ? <S.EmailErrorMsg>Preencha com um email válido</S.EmailErrorMsg> : ''}
               
                <S.SubmitButton type="button" onClick={sendEmail}>Eu quero!</S.SubmitButton>
            </S.NewsForm>
            : <></> 
            }

            { validForm ? 
            <S.SuccessContainer>
                <>
                    <S.SuccessTitle>Seu e-mail foi cadastrado com sucesso!</S.SuccessTitle>
                    <S.SuccessSubTitle>A partir de agora você receberá as novidade e ofertas exclusivas.</S.SuccessSubTitle>
                </>
                <S.SuccessButton onClick={reset}>Cadastrar novo e-mail</S.SuccessButton>
            </S.SuccessContainer>
            : <></>}
        </S.NewsContainer>
        
    )
}