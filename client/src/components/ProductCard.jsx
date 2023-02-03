import React from 'react'
import '../assets/styles/shop.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {FaSearchPlus} from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal';
// import { useDispatch} from 'react-redux';


const ProductCard = ({ props }) => {

  // const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const handleCart=()=>{
    
  }

  return (
    <div className='prod-card'>
        <img className='prod-img' src={props.productImage} alt="book_image" />
        <h6 className='main-title'>{props.booktitle}</h6>

        <div className='price-cart-area'>
            <div>
            {/* <p>Price: </p> */}
                <p>{props.actualprice}</p>
            </div>
            <div>
                <button onClick={handleShow}><FaSearchPlus/></button>
            </div>
            <div>
                <button onClick={handleCart}>Add To Cart</button>
            </div>
        </div>

        <div className='price-cartarea-tablet'>
            <div>
                <p className='price-tab'>Price: {props.actualprice}</p>
                <button onClick={handleShow} className='quick-look'><FaSearchPlus/></button>
            </div>
            <div>
                <button onClick={handleCart}>Add To Cart</button>
            </div>
        </div>

        <Modal
        size="lg"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body>
            <div className='modal-area'>
                <img src={props.productImage} alt="" />
                <h5>Title: {props.booktitle}</h5>
                <p>Author: {props.author}</p>
                <p>Price: {props.actualprice}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            <Button>Order Now</Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ProductCard