import './style.global.css'

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidestoshow: 1,
        slidestoscroll: 1
    };
    return(
        <section id="banner-section">
            <Slider {...settings}>
                <BannerImage/> 
                <BannerImage/> 
                <BannerImage/> 
                <BannerImage/> 
            </Slider>
       </section>
    )
}

const BannerImage = () => {
    return (
        <div>
            <div id="banner-text-container">
                <p id="banner-small-text">Olá, o que você está <br/> buscando?</p>
                <p id="banner-big-text">Criar ou migrar seu <br/> e-commerce?</p>
            </div>

            <img id="banner-vector" src='/Assets/Banner/banner.png'  alt='Vector Banner'/>

            <img id="banner-image" src='/Assets/Banner/img.png'/>
        </div>
    )
}