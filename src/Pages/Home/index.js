import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import Shelf from '../../Components/Shelf'
import News from '../../Components/News'
import Footer from '../../Components/Footer'

import { useState } from 'react'

export default function Home(){

    if (!localStorage.getItem('count')){
        localStorage.setItem('count','0')

    }
    const [count , setCount] = useState(localStorage.getItem('count'));
    function addItem(){

        localStorage.setItem('count',JSON.stringify(parseInt(localStorage.getItem('count')) + 1))
        setCount(localStorage.getItem('count'))
    }
    
    return(
        <>
            
            <Header count={count}/>
            <Banner/>
            <Shelf addItem={addItem}/>
            <News/>
            <Footer/>
            
        </>
    )
}