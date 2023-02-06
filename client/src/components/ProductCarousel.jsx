import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/carousel.css'
import { getbooksaction } from '../Redux/actions/booksaction';

const ProductCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const bookdata = useSelector(store=>store.getAllBooks)
      const data = bookdata.books
      const dispatch = useDispatch()
      
      useEffect(()=>{
        dispatch(getbooksaction())
      },[dispatch])
    
  return (
    <div>
          <div className='headings-area'>
              <p className='head-cat2'>Best Selling Books</p>
          </div>
        <Carousel
             className='prod-slider'
             swipeable={false}
             draggable={false}
             showDots={false}
             responsive={responsive}
             ssr={true}
             slidesToSlide={1}
             infinite={true}
             autoPlaySpeed={1000}
             keyBoardControl={true}
             customTransition=".5s"
             transitionDuration={500}
             containerClass="carousel-container"
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
        >
             {data && data.map((el)=>{
              return <div className='item'><ProductCard key={el._id} props={el} /></div>
            })}  
        </Carousel>
        </div>
  )
}

export default ProductCarousel