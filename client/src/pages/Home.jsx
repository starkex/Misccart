import React from 'react'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Category from '../components/Category';

const Home = () => {
  return (
    <div>
        <Navbars/>
        <Slider/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Home