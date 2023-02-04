import React from 'react'
import '../assets/styles/footer.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import logo from '../assets/Artboard_14.png'

const Footer = () => {
  return (
    <div className='footer-section'>
        <Container>
            <Row className='mt-5 mb-5'>
                <Col lg={4} sm={10} md={6}>
                    <div className='footer-details'>
                         <img src={logo} alt="" />
                          <p>Santushti Shopping Complex Shop No-10 Opp Samrat Hotel, New Delhi, Delhi 110003</p>
                          <a href="mailto:stark@gmail.com">stark@gmail.com</a>
                          <a href="tel:9898989898">+91-9898989898</a>

                          <div className='socials'>

                          </div>
                    </div>
                </Col>
                <Col lg={2} sm={3} md={4}>
                    <p className='footer-head mb-4'>Explore</p>
                    <ul className='footer-menu'>
                      <li><a href='#'>About us</a></li>
                      <li><a href='#'>Sitemap</a></li>
                      <li><a href='#'>Bookmarks</a></li>
                      <li><a href='#'>Sign in/Join</a></li>
                    </ul>
                </Col>
                <Col lg={2} sm={3} md={4}>
                    <p className='footer-head mb-4'>Our Support</p>
                    <ul className='footer-menu'>
                       <li><a href='#'>Help Center</a></li>
                       <li><a href='#'>Returns</a></li>
                       <li><a href='#'>Product Recalls</a></li>
                       <li><a href='#'>Accessibility</a></li>
                       <li><a href='#'>Contact Usli</a>  </li>
                       <li><a href='#'>Store Pickup</a></li>
                    </ul>
                </Col>
                <Col lg={2} sm={4} md={4}>
                    <p className='footer-head mb-4'>Policy</p>
                    <ul className='footer-menu'>
                      <li><a href='#'>Return Policy</a></li>
                      <li><a href='#'>Terms Of Use</a></li>
                      <li><a href='#'>Security</a></li>
                      <li><a href='#'>Privacy</a></li>
                    </ul>
                </Col>
                <Col lg={2} sm={4} md={4}>
                    <p className='footer-head mb-4'>Explore</p>
                    <ul className='footer-menu'>
                      <li><a href='#'>Romantic</a></li>
                      <li><a href='#'>Life</a></li>
                      <li><a href='#'>Spiritual</a></li>
                      <li><a href='#'>Fiction</a></li>
                      <li><a href='#'>Routine</a></li>
                      <li><a href='#'>Education</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer