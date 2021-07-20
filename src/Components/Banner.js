import * as S from '../Styles/bannerStyle'

export default function Banner(){
    return(
        <S.Banner>
            <S.BannerText>
                
                <S.SmallText>Olá, o que você está <S.Br/> buscando?</S.SmallText>
                <S.BigText>Criar ou migrar seu <br/> e-commerce?</S.BigText>
            </S.BannerText>
            <S.VectorBanner src='/Assets/Banner/banner.png'  alt='Vector Banner'/>
            <S.BannerImg  src='/Assets/Banner/img.png'/>
            
        </S.Banner>
    )
}