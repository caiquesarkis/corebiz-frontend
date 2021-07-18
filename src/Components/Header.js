import * as S from '../Styles/headerStyle'

export default function Header(props){
    return(
        <S.Header>
                {/* Corebiz Logo */}
                <S.CorebizLogo src={'/Assets/Header/corebiz-logo.png'} alt='Corebiz Logo'/>

                {/* Search for produtcs */}
                <S.Busca>
                    <S.SearchText>O que está procurando?</S.SearchText>
                    <S.SearchIcon src={'/Assets/Header/search-icon.png'}/>
                </S.Busca>

                {/* Fake login button */}
                <S.Login>
                    <S.LoginIcon src={'/Assets/Header/login-icon.png'}/>
                    <S.LoginText>Minha Conta</S.LoginText>

                    
                </S.Login>

                {/* MiniCart icon and counter */}
                <S.MiniCart>
                    <S.MiniCartIcon src={'/Assets/Header/mini-cart-icon.png'} />

                    <S.MiniCartCounter>
                        <S.MiniCartCounterText>{props.count}</S.MiniCartCounterText>
                        <S.CounterEllipse />
                    </S.MiniCartCounter>
                    
                </S.MiniCart>

            </S.Header>
    )
}