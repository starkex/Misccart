import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MainLogo from '../assets/Artboard_14.png'

const AdminNavbar = () => {

  const [lgShow, setLgShow] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass,setPass] = useState('')

  const handleSubmit =(e)=>{
      e.preventDefault();
      const payload = {
        name,
        email,
        pass
      }
      console.log(payload)
  }


  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">
          <img src={MainLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav className='my-auto'>
              <Nav.Link href="/shop">Admin</Nav.Link>
              {/* <Nav.Link href="#action1" onClick={() => setLgShow(true)}>Logout</Nav.Link> */}
              <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

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
              <input type="text" placeholder='Enter name' value={name} onChange={e=>setName(e.target.value)}/>
              <input type="email" placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)}/>
              <input type="password" placeholder='Enter Password' value={pass} onChange={e=>setPass(e.target.value)}/>
              <input type="submit" value='Login'/>
          </form>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default AdminNavbar