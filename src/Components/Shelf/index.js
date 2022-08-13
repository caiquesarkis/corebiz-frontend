import * as S from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Shelf(props){
    const [products , setProducts] = useState([]);
    useEffect(() =>{
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products').then(response => {
        const data = response.data;
        if (data != null){
            setProducts(data)
        }
    })
    },[])
   
    return(
        <S.ShelfSection>
             {/* Shelf Title */}
             <S.ShelfTitle>
                Mais Vendidos
            </S.ShelfTitle>
            <S.TitleBottonLine/>
            <S.ShelfContainer>
                <S.LeftArrow src='/Assets/Prateleira/left-arrow.png'  alt="Left Arrow"/>
                <S.Shelf>
                    {/* Shelf Products */}
                    <S.ShelfProducts>
                        {/* Loops through products populating cards. The only exception is the last product that
                            does not appear on the Figma Layout */}
                        { products.map(product => {
                            const installments = product['installments']
                            let quantity;

                           {/* Verify if the product can be split into smaller installments */}
                            if (installments.length >0){
                                quantity = installments[0].quantity;
                            }
                            if (product.productId !== 5){
                                return(
                                    <S.Product>
                                        <S.ProductImg src= {product.imageUrl} alt={`Product ${product.productId} Image`}/>
                                        <S.ProductInfo>
                                            <S.ProductHeader>
                                                <S.ProductName>{product.productName}</S.ProductName>

                                                <S.Rating src= {`/Assets/Prateleira/stars(${product.stars}).svg`} alt={`${product.stars} stars product`} />

                                                <S.ListPrice>
                                                    {product.listPrice != null ? `de R$ ${product.listPrice/100}` : "  "}
                                                </S.ListPrice>
                                            </S.ProductHeader>
                                           
                                            <S.ProductPrice> por R$ {(product.price/100).toFixed(2)}</S.ProductPrice>
                                            <S.ProductInstallments>
                                            {installments.length > 0 ? `ou em ${quantity} x de R$ ${((product.price/100)/quantity).toFixed(2)}` : " "}
                                            </S.ProductInstallments>
                                            <S.BuyButton onClick={props.addItem}>Comprar</S.BuyButton>
                                        </S.ProductInfo>
                                    </S.Product>
                                )
                            }

                        })}
                    </S.ShelfProducts>
                </S.Shelf>
                <S.RightArrow src='/Assets/Prateleira/right-arrow.png'  alt="Right Arrow"/>
            </S.ShelfContainer>
        </S.ShelfSection>
        
    )
}