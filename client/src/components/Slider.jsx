import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import backgroundSlide from '../assets/media/slider/hero-background.jpg'
import slider1 from '../assets/media/slider/hero2.png'
import '../assets/styles/slider.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className='first-slide'>
          <Container>
            <Row className='m-auto mt-5 mb-5 row-slide'>
              <Col lg={6}>
                <div className='slide1-first'>
                  <h1>Featured Books of the <span >March</span> Month</h1>
                  <button className='mt-4'>Shop Now</button>
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
            <Row className='m-auto mt-5 mb-5 row-slide'>
              <Col lg={6}>
                <div className='slide1-first'>
                  <h1>Featured Books of the <span >March</span> Month</h1>
                  <button className='mt-4'>Shop Now</button>
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

        <Carousel.Item className='third-slide'>
          <Container>
            <Row className='m-auto mt-5 mb-5 row-slide'>
              <Col lg={6}>
                <div className='slide1-first'>
                  <h1>Featured Books of the <span >March</span> Month</h1>
                  <button className='mt-4'>Shop Now</button>
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

      </Carousel>
    </div>
  )
}

export default Slider