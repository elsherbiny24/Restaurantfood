

import React from 'react';
import './checkout.css'
import Banner from '../../Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

const CheckOut = () => {
    const Total__price = useSelector(state => state.cart.totalAmount);
    // const number = 30
    // const totalamount =Total__price + number()
  return (
    <>
    <Banner title='Checkout'/>
    <section className='Checkout'>
        <Container>
            <Row>
                <Col lg={8} md={6} sm={12} xs={12}>
                    <div className='div__Checkout'>
                        <form>
                            <h5>Shipping Address</h5>
                            <div className='div__group'>
                                <input type='text' placeholder='enter your name'/>
                            </div>
                            <div className='div__group'>
                                <input type='email' placeholder='enter your email'/>
                            </div>
                            <div className='div__group'>
                                <input type='number' placeholder='phone number'/>
                            </div>
                            <div className='div__group'>
                                <input type='text' placeholder='country'/>
                            </div>
                            <div className='div__group'>
                                <input type='text' placeholder='city'/>
                            </div>
                            <div className='div__group'>
                                <input type='number' placeholder='postal code'/>
                            </div>
                            <button className='btn__ADDtocart btn__ADDtocart2'>payment</button>
                        </form>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} xs={12}>
                    <div className='sup__checkout'>
                        <div className='sup__check'>
                            <h6>Subtotal:</h6>
                            <h6>${Total__price}</h6>
                        </div>
                        <div className='sup__check'>
                            <h6>Shipping:</h6>
                            <h6>$30</h6>
                        </div>
                        <div className='sup__check'>
                            <h4>Total:</h4>
                            <h4>${Total__price + 30}</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default CheckOut