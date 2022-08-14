import './style.global.css'

export default function Footer(){
    return(
        <section id="footer-section">
            <div id="footer-location">
                <div id="footer-location-title">
                    Localização
                    <hr className="footer-divider"/>
                    <p id="footer-location-info">
                        Avenida Andrômeda, 2000. Bloco 6 e 8 <br/>
                        Alphavile SP <br/>
                        brasil@corebiz.ag <br/>
                        +55 11 3090 1039 <br/>
                    </p>
                </div>
            </div>

            <div id="footer-contatct">
                <div id="footer-contact-email">                
                    <img src='/Assets/Footer/email.png' alt="Email"/>
                    <p>ENTRE EM CONTATO</p>
                </div>

                <div id="footer-contact-consultant">
                    <img src='/Assets/Footer/consultant.png' alt="Consultant"/>
                    <p>FALE COM O NOSSO <br/> CONSULTOR ONLINE</p>
                </div>
            </div>

            <div id="footer-sponsor">
                <div id="footer-sponsor-corebiz">
                    <p>Created by</p>
                    <img src='/Assets/Footer/corebiz.png' alt="Created" />
                </div>

                <div id="footer-sponsor-vtex">
                    <p>Powered by</p>
                    <img src='/Assets/Footer/vtex.png' alt="Powered" />
                </div>
            </div>
            </section>
)
}