import * as S from '../Styles/ShelfStyle';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function Shelf(){
    const [products , setProducts] = useState([]);
    useEffect(() =>{
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products').then(response => {
        const data = response.data;
        
        if (data != null){
            setProducts(data)
            console.log(data)
        }
    })
    
    },[])
   
    return(
        <S.ShelfSection>
            <S.ShelfContainer>
                <S.LeftArrow src='/Assets/Prateleira/left-arrow.png'  alt="Left Arrow"/>
                <S.Shelf>

                    {/* Shelf Title */}
                    <S.ShelfTitle>
                        Mais Vendidos
                        <S.TitelBottonLine/>
                    </S.ShelfTitle>

                    {/* Shelf Products */}
                    <S.ShelfProducts>

                        { products.map(product => {
                            const installments = product['installments']
                            let quantity;
                            if (installments.length >0){
                                quantity = installments[0].quantity;
                            }

                            
                            return(
                                <S.Product>
                                    <S.ProductImg src= {product.imageUrl} alt='Product Image'/>
                                    <S.ProductInfo>
                                        <p>{product.productName}</p>
                                        <p>por R$ {(product.price/100).toFixed(2)}</p>
                                        <p>
                                        {installments.length > 0 ? `ou em ${quantity} x de ${((product.price/100)/quantity).toFixed(2)}` : " "}
                                        </p>
                                        
                                    </S.ProductInfo>
                                </S.Product>
                            )
                        })}

                    </S.ShelfProducts>
                </S.Shelf>
                <S.RightArrow src='/Assets/Prateleira/right-arrow.png'  alt="Right Arrow"/>
            </S.ShelfContainer>
           
        </S.ShelfSection>
        
    )
}