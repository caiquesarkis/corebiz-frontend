import * as S from '../Styles/footerStyle'

export default function Footer(){
    return(
        <S.FooterContainer>
            <S.Location>
                <S.LocationTitle>
                    Localização
                    <S.TitleBottonLine/>
                    <S.LocationInfo>
                    Avenida Andrômeda, 2000. Bloco 6 e 8 <br/>
                    Alphavile SP <br/>
                    brasil@corebiz.ag <br/>
                    +55 11 3090 1039 <br/>
                    </S.LocationInfo>
                </S.LocationTitle>
            </S.Location>

            <S.Contact>
                <S.Email>                
                    <img src='/Assets/Footer/email.png' />
                    <p>ENTRE EM CONTATO</p>
                </S.Email>

                <S.Consultant>

                    <img src='/Assets/Footer/consultant.png' />
                    <p>FALE COM O NOSSO <br/> CONSULTOR ONLINE</p>
                </S.Consultant>
            </S.Contact>

            <S.Sponsor>
                <S.Corebiz>
                    <p>Created by</p>
                    <img src='/Assets/Footer/corebiz.png' />
                </S.Corebiz>

                <S.Vtex>
                    <p>Powered by</p>
                    <img src='/Assets/Footer/vtex.png' />
                </S.Vtex>
            </S.Sponsor>
        </S.FooterContainer>
    )
}