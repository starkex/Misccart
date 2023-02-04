import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../assets/styles/homepage.css'
import romantic from '../assets/category/icons8-romantic-64.png'
import life from '../assets/category/icons8-routine-64 (1).png'
import routine from '../assets/category/icons8-routine-64.png'
import spiritual from '../assets/category/icons8-spiritual-64.png'
import fiction from '../assets/category/icons8-cyborg-64.png'
import education from '../assets/category/icons8-graduate-64.png'


const Categories = () => {
  return (
    <div>
        <Container className='category-section'>
            <Row className='mb-4 '>
                <div>
                    <p className='head-cat'>Featured Categories</p>
                </div>
            </Row>
            <Row>
                {/* <div className='catagories'> */}
                    <div className='category-box1'>
                        <img src={fiction} alt="" />
                        <h5>Fiction</h5>
                        <p>Shop Now</p>
                    </div>
                    <div className='category-box2'>
                        <img src={education} alt="" />
                        <h5>Education</h5>
                        <p>Shop Now</p>
                    </div>
                    <div className='category-box3'>
                        <img src={romantic} alt="" />
                        <h5>Romantic</h5>
                        <p>Shop Now</p>
                    </div>
                    <div className='category-box4'>
                        <img src={spiritual} alt="" />
                        <h5>Spiritual</h5>
                        <p>Shop Now</p>
                    </div>
                    <div className='category-box5'>
                        <img src={life} alt="" />
                        <h5>Life</h5>
                        <p>Shop Now</p>
                    </div>
                    <div className='category-box6'>
                        <img src={routine} alt="" />
                        <h5>Routine</h5>
                        <p>Shop Now</p>
                    </div>
                {/* </div> */}
            </Row>
        </Container>
    </div>
  )
}

export default Categories