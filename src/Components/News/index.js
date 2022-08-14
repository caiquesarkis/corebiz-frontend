import './style.global.css'
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
            setNameErro(true);
        }if (email === "") {
            setEmailErro(true);
        } else{
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
        <section id="news-section">
            {!validForm ? <h1 id="news-title">
                Participe de nossas news com promoções e novidades!
            </h1>
            : <></>
            }

            { !validForm ?  
            <form id="news-form">
                <div>
                    <input className={`news-input ${nameErro? "input-error": ""}`} placeholder='Digite seu nome' type="text" name="name" value={name}  onChange={handleName}/>
                    { nameErro ? <p className="news-error-text">Preencha com seu nome completo</p> : ''}
                </div>
                <div>
                    <input className={`news-input ${emailErro? "input-error": ""}`} placeholder='Digite seu email' type="email" inputmode="email" name="email" autocomplete="username" value={email} onChange={handleEmail}/>          
                    { emailErro ? <p className="news-error-text">Preencha com um email válido</p> : ''}
                </div>
              
                <button id="news-form-submit-button" type="button" onClick={sendEmail}>Eu quero!</button>
            </form>
            : <></> 
            }

            { validForm ? 
            <div id="news-success-container">
                <>
                    <p id="news-success-title">Seu e-mail foi cadastrado com sucesso!</p>
                    <p id="news-success-subtitle">A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                </>
                <button id="news-success-button" onClick={reset}>Cadastrar novo e-mail</button>
            </div>
            : <></>}
        </section>
        
    )
}