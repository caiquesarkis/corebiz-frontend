import { useState } from 'react'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import Shelf from '../../Components/Shelf'
import News from '../../Components/News'
import Footer from '../../Components/Footer'

export default function Home(){
    if (!sessionStorage.getItem('count')){
        sessionStorage.setItem('count','0')

    }

    const [count , setCount] = useState(sessionStorage.getItem('count'));
    function addItem(){

        sessionStorage.setItem('count',JSON.stringify(parseInt(sessionStorage.getItem('count')) + 1))
        setCount(sessionStorage.getItem('count'))
    }

    return(
        <>
            <Header count={count}/>
            <Banner/>
            <Shelf addItem={addItem}/>
            <News  />
            <Footer/>
        </>
    )
}