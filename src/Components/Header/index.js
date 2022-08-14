import './style.global.css'

export default function Header(props){
    return(
        <section id="header-section">
                <img id="header-sandwhich-icon" src= '/Assets/Header/sandwich.svg'/>

                <img id="header-corebiz-logo" src='/Assets/Header/corebiz-logo.svg' alt='Corebiz Logo'/>

                {/* Search for produtcs */}
                <div id="header-search-container">
                    <input id="header-search-input" placeholder="O que está procurando?" type="text"></input>
                    <img id="header-search-icon" src='/Assets/Header/search-icon.png'/>
                </div>

                <button id="header-login-button">
                    <img id="header-login-button-icon" src='/Assets/Header/login-icon.png'/>
                    <p id="header-login-button-text">Minha Conta</p>
                </button>

                {/* MiniCart icon and counter */}
                <div id="header-mini-cart-container">
                    <img id="header-mini-cart-icon" src='/Assets/Header/mini-cart-icon.png' />

                    <div id="header-mini-cart-counter-container">
                        <p id="header-mini-cart-counter-text">{props.count}</p>
                        <div id="header-mini-cart-counter-circle" />
                    </div>
                </div>
            </section>
    )
}