import React from 'react'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import '../assets/styles/shop.css'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getbooksaction } from '../Redux/actions/booksaction'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'


const Shop = () => {
    const dispatch = useDispatch()
    const allbooks = useSelector(store=>store.getAllBooks)
    console.log(allbooks.books)
    useEffect(()=>{
        dispatch(getbooksaction())
    },[dispatch])
   
  return (
    <div>
        <Navbars/>
            <Container>
                <Row className='shop-area'>
                    {allbooks.books && allbooks.books.map(e=>{
                        return <Col lg={3} md={6} className='m-auto' key={e._id}>
                        <ProductCard props={e}/>
                      </Col>
                    })}
                </Row>
            </Container>
        <Footer/>
    </div>
  )
}

export default Shop