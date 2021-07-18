import * as S from '../Styles/newsStyle'

export default function News(){
    return(
        <S.NewsContainer>
            <S.Title>
                Participe de nossas news com promoções e novidades!
            </S.Title>
            <S.NewsForm>
                <S.TextInput placeholder='Digite seu nome' />
                <S.TextInput placeholder='Digite seu email' />

                
                <S.SubmitButton>Eu quero!</S.SubmitButton>
            </S.NewsForm>
            
                

        </S.NewsContainer>
        
    )
}