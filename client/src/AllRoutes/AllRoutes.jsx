import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes