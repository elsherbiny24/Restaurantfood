
import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import { Col, Container, Row } from 'react-bootstrap'
import products from '../../assets/fake-data/products'
import './fooddetail.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../shopping-cart/Cartslice';
import { useParams, Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

const FoodDetail = () => {
    const Notify =() =>{
        toast.success('Product added to cart' ,{
          position:toast.POSITION.BOTTOM_RIGHT,
         
        })
       
      }
    const {id} = useParams()
    const product = products.find(item => item.id === id)
    const [productitem, setproductitem] = useState(product.image01)
    const dispatch = useDispatch()
    const Add__tocart = (id, title, image01, price) => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price,
        }))
    }
    const {category } = product
    const filter__product = products.filter((item) => category === item.category && item.id !== id)

    // useEffect(() =>{
    //     setproductitem(product.image01)
    // },[product])

    return (
        <>
            <Banner title={product.title}/>
            <section className='food__details'>
                <Container>
                    <Row className=''>
                        <Col lg={2} md={2} sm={2} xs={5}>
                            <div className='Img__item'>
                                <img src={product.image01} alt='' className='img__product' onClick={() => setproductitem(product.image01)}/>
                            </div>
                            <div className='Img__item'>
                                <img src={product.image02} alt='' className='img__product' onClick={() => setproductitem(product.image02)}/>
                            </div>
                            <div className='Img__item'>
                                <img src={product.image03} alt='' className='img__product' onClick={() => setproductitem(product.image03)}/>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={6}>
                            <img src={productitem} alt='' className='img__big'/>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <div className='text__detail'>
                                <h2>{product.title}</h2>
                                <h5>Price:  <span>${product.price}</span></h5>
                                <h6>Category: <span className='pizza'>{product.category}</span></h6>
                                <button className='btn__cartadd' onClick={() => {
                                     Add__tocart(product.id, product.title, product.image01, product.price);
                                     Notify();
                                   }}>
                                Add To Cart
                             </button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <h2 className='h2'>Other items in {category}</h2>
                        {filter__product.map(item => (
                            <Col lg={3} md={4} sm={6} xs={6} key={item.id}>
                                <div className='product__item'>
                                    <div className='product__img'>
                                        <img src={item.image01} alt='' className='img__product'/>
                                    </div>
                                    <h5 className='h5'>{item.title}</h5>
                                    <div className='item__price'>
                                        <p>${item.price}</p>
                                        <button className='btn__ADDtocart' onClick={() => {
                                     Add__tocart(product.id, product.title, product.image01, product.price);
                                     Notify();
                                   }}>Add To Cart</button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <ToastContainer />
                </Container>
            </section>
        </>
    )
}

export default FoodDetail