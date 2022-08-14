import './style.global.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'url("/Assets/Prateleira/left-arrow.png")' }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'url("/Assets/Prateleira/right-arrow.png")' }}
      onClick={onClick}
    />
  );
}

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

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <></>,
                prevArrow: <></>
            }
            }
        ]
    };
   
    return (products.length != 0) && (
        <section id="shelf-section">
             {/* Shelf Title */}
             <h2 id="shelf-title">
                Mais Vendidos
            </h2>
            <hr className="shelf-divider"/>
            <Slider {...settings}>
                { products.map(product => {
                    const installments = product['installments']
                    let quantity;

                    if (installments.length >0){
                        quantity = installments[0].quantity;
                    }
                    if (product.productId !== 5){
                        return(
                            <div>
                                <div id="shelf-product-card">
                                    <img id="shelf-product-image" src= {product.imageUrl} alt={`Product ${product.productId} Image`}/>
                                    <div id="shelf-product-info">
                                        <p id="shelf-product-name">{product.productName}</p>

                                        <img id="shelf-product-rating" src= {`/Assets/Prateleira/stars(${product.stars}).svg`} alt={`${product.stars} stars product`} />

                                        <p id="shelf-product-list-price">
                                            {product.listPrice != null ? `de R$ ${product.listPrice/100}` : "  "}
                                        </p>

                                        <p id="shelf-product-price"> por R$ {(product.price/100).toFixed(2)}</p>
                                        <p id="shelf-product-installments">
                                        {installments.length > 0 ? `ou em ${quantity} x de R$ ${((product.price/100)/quantity).toFixed(2)}` : " "}
                                        </p>
                                        <button id="shelf-product-buy-button" onClick={props.addItem}>Comprar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                })}
            </Slider>

        </section>
        
    )
}