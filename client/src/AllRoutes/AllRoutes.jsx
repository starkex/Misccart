import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default Routes