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
  const [rlgShow, setRLgShow] = useState(false);
  const [flgShow, setFLgShow] = useState(false);


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
                  <Nav.Link href="">
                    <div className='nav-icons'>
                      <Link to='/shop' className='nav-options'>
                        Shop
                      </Link>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="">
                    <div className='nav-icons'>
                      <Link to='/admin' className='nav-options'>
                        {/* <FaShoppingCart className='cart-ico' /> */}
                         Admin
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
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='login-box'>
            <form action="" className='login-form' onSubmit={handleSubmit}>
              <label className='mt-3 mb-2'>Username</label>
              <input type="text" placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} />
              <label className='mt-3 mb-2'>Email</label>
              <input type="email" placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
              <label className='mt-3 mb-2'>Password</label>
              <input className='mb-5' type="password" placeholder='Enter Password' value={pass} onChange={e => setPass(e.target.value)} />
              <input className='mb-5 loginbutton' type="submit" value='Login' />
            </form>
          </div>
          <div className='recover-options'>
            <p>Don't Have An Account ? <span className='create-acc' onClick={() =>{ 
              setRLgShow(true)
              setLgShow(false)
              }}> Create New Account</span>
            </p>

            <p onClick={() =>{ 
              setFLgShow(true)
              setLgShow(false)
              setRLgShow(false)
              }}> Forgot Password ?
            </p>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={rlgShow}
        onHide={() => setRLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton >
          <Modal.Title  id="example-modal-sizes-title-lg">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='login-box'>
            <form action="" className='login-form' onSubmit={handleSubmit}>
              <label className='mt-3 mb-2'>Select Username</label>
              <input type="text" placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} />
              <label className='mt-3 mb-2'>Email</label>
              <input type="text" placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} />
              <label className='mt-3 mb-2'>Full Name</label>
              <input type="email" placeholder='Enter Your Name' value={email} onChange={e => setEmail(e.target.value)} />
              <label className='mt-3 mb-2'>Address</label>
              <input type="email" placeholder='Enter Your Address' value={email} onChange={e => setEmail(e.target.value)} />
              <label className='mt-3 mb-2'>Password</label>
              <input className='' type="password" placeholder='Enter Password' value={pass} onChange={e => setPass(e.target.value)} />
              <label className='mt-3 mb-2'>Confirm Password</label>
              <input className='mb-5' type="password" placeholder='Confirm Password' value={pass} onChange={e => setPass(e.target.value)} />
              <input className='mb-5 loginbutton' type="submit" value='Register' />
            </form>
          </div>
          <div className='recover-options'>
            <p>Already Registered ? <span className='create-acc' onClick={()=>{
                setLgShow(true)
                setRLgShow(false)
            }}> Login Now</span></p>
            <p onClick={() =>{ 
              setFLgShow(true)
              setLgShow(false)
              setRLgShow(false)
              }}> Forgot Password ?
            </p>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={flgShow}
        onHide={() => setFLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Reset Your Password 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='login-box'>
            <form action="" className='login-form' onSubmit={handleSubmit}>
              <h6></h6>
              <label className='mt-3 mb-2'>Email</label>
              <input type="email" placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
              <input className='mb-5 mt-5 loginbutton' type="submit" value='Submit' />
            </form>
          </div>
  
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarHeader;