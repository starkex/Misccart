import React from 'react'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Category from '../components/Category';
import NavbarHeader from '../components/NavbarHeader';
import ProductCarousel from '../components/ProductCarousel';

const Home = () => {
  return (
    <div>
        {/* <Navbars/> */}
        <NavbarHeader/>
        <Slider/>
        <Category/>
        <ProductCarousel className='mt-5 mb-5'/>
        <Footer/>
    </div>
  )
}

export default Home