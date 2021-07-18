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
                
            </S.Contact>

            <S.Sponsor>
                
            </S.Sponsor>
        </S.FooterContainer>
    )
}