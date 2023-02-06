import React from 'react'
import '../assets/styles/shop.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {FaSearchPlus} from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal';
// import { useDispatch} from 'react-redux';
import ReactStars from "react-rating-stars-component";


const ProductCard = ({ props }) => {

  // const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const handleCart=()=>{
    
  }

  return (
    <div className='prod-card m-3'>
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
        
        <div className='ratings'>
        Global Rating:  
            <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                value={5}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
        </div>

        <div className='price-cartarea-tablet'>
            <div>
                <p className='price-tab'>Price: Rs.{props.actualprice} <span className='sale-price'>{props.initialprice? 'Rs.'+props.initialprice: ''}</span></p>
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
                <p>Price: Rs.{props.actualprice} <span className='sale-price'>{props.initialprice? props.initialprice: ''}</span></p>
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