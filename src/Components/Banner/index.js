import './style.global.css'
export default function Banner(){
    return(
        <section id="banner-section">
            <div id="banner-text-container">
                <p id="banner-small-text">Olá, o que você está <br/> buscando?</p>
                <p id="banner-big-text">Criar ou migrar seu <br/> e-commerce?</p>
            </div>

            <img id="banner-vector" src='/Assets/Banner/banner.png'  alt='Vector Banner'/>

            <img id="banner-image" src='/Assets/Banner/img.png'/>
        </section>
    )
}