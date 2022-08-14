import './style.global.css';
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
        console.log(data)
    })
    },[])
   
    return(
        <section id="shelf-section">
             {/* Shelf Title */}
             <h2 id="shelf-title">
                Mais Vendidos
            </h2>
            <hr className="shelf-divider"/>
            <div id="shelf-wrapper">
                <img id="shelf-right-arrow" src='/Assets/Prateleira/left-arrow.png'  alt="Left Arrow"/>
                    {/* Shelf Products */}
                    <div id="shelf-products">
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
                                    <div id="shelf-product">
                                        <img id="shelf-product-image" src= {product.imageUrl} alt={`Product ${product.productId} Image`}/>
                                        <div id="shelf-product-info">
                                            <div id="shelf-product-header">
                                                <p id="shelf-product-name">{product.productName}</p>

                                                <img id="shelf-product-rating" src= {`/Assets/Prateleira/stars(${product.stars}).svg`} alt={`${product.stars} stars product`} />

                                                <p id="shelf-product-list-price">
                                                    {product.listPrice != null ? `de R$ ${product.listPrice/100}` : "  "}
                                                </p>
                                            </div>
                                           
                                            <p id="shelf-product-price"> por R$ {(product.price/100).toFixed(2)}</p>
                                            <p id="shelf-product-installments">
                                            {installments.length > 0 ? `ou em ${quantity} x de R$ ${((product.price/100)/quantity).toFixed(2)}` : " "}
                                            </p>
                                            <button id="shelf-product-buy-button" onClick={props.addItem}>Comprar</button>
                                        </div>
                                    </div>
                                )
                            }

                        })}
                    </div>
                <img id="shelf-left-arrow" src='/Assets/Prateleira/right-arrow.png'  alt="Right Arrow"/>
            </div>
        </section>
        
    )
}