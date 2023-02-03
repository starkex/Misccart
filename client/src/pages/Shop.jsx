import React,{useState} from 'react'
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
import ShopFilters from '../components/ShopFilters'
import { Pagination } from 'antd'


const Shop = () => {
    const dispatch = useDispatch()
    const allbooks = useSelector(store=>store.getAllBooks)
    console.log(allbooks.books)
    const [page,setPage]=useState(1)

    useEffect(()=>{
      const getParams = {
        params:{
          limit:10,
          _page:page
        }
      }
        dispatch(getbooksaction(getParams))
    },[dispatch,page])
   
  return (
    <div>
        <Navbars/>
        <ShopFilters/>
            <Container>
                <Row className='shop-area mt-5'>
                    {allbooks.books && allbooks.books.map(e=>{
                        return <Col lg={3} md={6} className='m-auto mt-2 mb-5' key={e._id}>
                        <ProductCard props={e}/>
                      </Col>
                    })}
                </Row>
            </Container>
            <Container>
              <Row className='m-auto'>
                  {/* <Pagination defaultCurrent={1} total={5} pageSize={12} dataSource={allbooks.books} /> */}
                  <button onClick={()=>setPage(page-1)}>Prev</button>
                  <p>{page}</p>
                  <button onClick={()=>setPage(page+1)}>Next</button>
              </Row>
            </Container>
        <Footer/>
    </div>
  )
}

export default Shop