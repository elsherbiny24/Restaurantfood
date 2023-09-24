import React from 'react';
import './productcart.css'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../shopping-cart/Cartslice';
import {addItem} from '../../shopping-cart/Cartslice';
import { toast,ToastContainer } from 'react-toastify';

const ProductCard = (props) => {
  const Notify =() =>{
    toast.success('Product added to cart' ,{
      position:toast.POSITION.BOTTOM_RIGHT,
     
    })
   
  }
    const {id , title , image01, price} = props.iteam
    const dispatch = useDispatch();

    const addToCartHandler = () => {
      dispatch(cartActions.addItem({
        id,
        title,
        image01,
        price,
      }));
      // console.log("erorr")
    };
  return (
    <>
    <div className='product__item'>
        <div className='product__img'>
        <Link to={`/food/${id}`} className='link'>
            <img src={image01} alt='' className='img__product'/>
            </Link>
        </div>
        <h5 className='h5'><Link to={`/food/${id}`} className='link'>{title}</Link></h5>
        <div className='item__price'>
            <p>${price}</p>
            <button className='btn__ADDtocart' onClick={(event) => {
      addToCartHandler();
      Notify();
}}>
   Add To Cart
</button>
        </div>
    </div>
    
    </>
  )
}

export default ProductCard