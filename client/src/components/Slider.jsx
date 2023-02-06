import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import backgroundSlide from '../assets/media/slider/hero-background.jpg'
import slider1 from '../assets/media/slider/hero2.png'
import slider2 from '../assets/media/slider/hero21.png'
import slider3 from '../assets/media/slider/hero3.png'
import '../assets/styles/slider.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className='first-slide'>
          <Container>
            <Row className='row-slide'>
              <Col lg={6}>
                <div className='slide1-first'>
                  <h1>Featured Books of the <span style={{fontWeight:800}}> This Month</span></h1>
                  <button className='mt-4'><Link to="/shop" className='linkref'> Shop Now </Link></button>
                </div>
              </Col>
              <Col lg={6}>
                <div className='slide1-second'>
                  <img src={slider1} alt="books" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item className='second-slide'>
          <Container>
            <Row className='row-slide'>
              <Col lg={6}>
                <div className='slide1-first'>
                  <h1>Limited Deal of the <span style={{fontWeight:800}}> Week !! </span></h1>
                  <button className='mt-4'><Link to="/shop" className='linkref'> Shop Now </Link></button>
                </div>
              </Col>
              <Col lg={6}>
                <div className='slide2-second'>
                  <img src={slider2} alt="books" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item className='third-slide'>
          <Container>
            <Row className='row-slide'>
              <Col lg={6}>
                <div className='slide1-first'>
                  <h1>Get 40% off Now on <span style={{fontWeight:800}}>This Combo </span></h1>
                  <button className='mt-4'><Link to="/shop"className='linkref'> Shop Now </Link></button>
                </div>
              </Col>
              <Col lg={6}>
                <div className='slide3-second'>
                  <img src={slider3} alt="books" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default Slider