import React, { useState } from 'react';
import '../assets/styles/style.css'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Misccartlogo from '../assets/Artboard_14.png';
import { Link } from 'react-router-dom';


const NavbarHeader = () => {
  const [lgShow, setLgShow] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      pass
    }
    console.log(payload)
  }
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-back">
          <Container className='nav-main' fluid>
            <Navbar.Brand>
              <Link to='/'>
                <img src={Misccartlogo} alt='logo' />
              </Link>
            </Navbar.Brand>

            <Form className="d-flex search-bar1">
              <Form.Control
                type="search"
                placeholder="Find your favorite Books"
                className="me-2"
                aria-label="Search"
              />
              {/* <button onClick={()=>onSearch(text)}>op</button> */}
            </Form>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Misccart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Form className="search-bar2">
                <Form.Control
                  type="search"
                  placeholder="Find your favorite products"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Offcanvas.Body>

                {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
                <Nav className="justify-content-center pe-3 side-options-nav">
                  <Nav.Link href="#action1">
                    <div className='nav-icons'>
                      <Link to='/Shop' className='nav-options'>
                        Shop
                      </Link>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <div className='nav-icons'>
                      <Link to='/login' className='nav-options'>
                        <FaShoppingCart className='cart-ico' /> Cart
                      </Link>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#action1" >
                    <div className='nav-icons' onClick={() => setLgShow(true)}>
                        <FaUserAlt className='user-ico' /> Login
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form action="" className='login-form' onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder='Enter Password' value={pass} onChange={e => setPass(e.target.value)} />
              <input type="submit" value='Login' />
            </form>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default NavbarHeader;