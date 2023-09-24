import React, { useState } from 'react'
import './cart.css'
import { ListGroup } from 'react-bootstrap'
import CartItem from './CartItem'
import { useSelector ,useDispatch } from 'react-redux';
import { CartuiActions } from './Cartui';
import { Link } from 'react-router-dom';

const Care = () => {
    const [cartVisible, setCartVisible] = useState(false);
   
    const Cartproducts = useSelector(state => state.cart.cartProducts);
    const Total__price = useSelector(state => state.cart.totalAmount);
   
    const dispath = useDispatch()
  const toggle__Cart =() =>{
    dispath(CartuiActions.toggle())
  }
   
    return (
        <>
            <div className="cart__containe">
                <ListGroup className={cartVisible ? "cart cart-active" : "cart"}>
                    <div className="cart__close">
                        <span onClick={toggle__Cart}>x</span>
                    </div>
                    <div className="cart__item__list">
                        {Cartproducts.length === 0 ? (
                            <h6 className="text-center h6__cart">No item added to the cart</h6>
                        ) : (
                            Cartproducts.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))
                        )}
                    </div>
                    <div className="cart__buttons">
                        <h6 className="Subtotal">Subtotal: <span className="span__cart__btn">${Total__price}</span></h6>
                        <button className="btn__cart"><Link to='/checkout' onClick={toggle__Cart}>check out</Link></button>
                    </div>
                </ListGroup>
            </div>
        </>
    )
}

export default Care