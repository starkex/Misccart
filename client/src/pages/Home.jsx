import React from 'react'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Category from '../components/Category';
import NavbarHeader from '../components/NavbarHeader';
const Home = () => {
  return (
    <div>
        {/* <Navbars/> */}
        <NavbarHeader/>
        <Slider/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Home