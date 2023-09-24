

import React, { useState,useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componats/home/Home'
import Navbars from './componats/navbars/Navbars'
import Footer from './componats/footer/Footer'
import products from './assets/fake-data/products'
import Care from './componats/pages/cartitem/Care'
import { useSelector } from 'react-redux'
import AllFoods from './componats/All foods/AllFoods'
import FoodDetail from './componats/food-deatail/FoodDetail'
import Cart from './componats/cart/Cart'
import CheckOut from './componats/pages/checkout/CheckOut'
import LogIn from './componats/pages/login/LogIn'
import logo from './assets/images/res-logo.png'

const App = () => {
  const [loading , setloading] = useState(false)
  useEffect(() =>{
    setloading(true)
    setTimeout(() =>{
      setloading(false)
    },3000)
  },[])
  const [product, setProduct] = useState([products]);
  //add to cart
const [cart, setCart] = useState([]);

const AddToCart = (product) => {
  const itemExist = cart.find((x) => x.id === product.id);
  if (itemExist) {
    alert('This product is already in your cart');
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
    alert('Product has been added to your cart');
  }
};

const cartQuantity = cart.reduce((qty, x) => {
  return qty + x.qty;
}, 0);
const Show__Cart = useSelector(state => state.cartui.cartVisible)

  return (
  <>
  {loading ? <div className='div__logo'>
    <img src={logo} alt='' className='img__logo'/>
    <h6 className='h6h6'>Tasty Treat</h6>
  </div> :
  <BrowserRouter>
  <Navbars cartQuantity={cartQuantity}/>
  {Show__Cart &&  <Care />}
 
  <Routes>
   <Route path='/' element={<Home AddToCart={AddToCart}/>}/>
   <Route path='/food' element={<AllFoods />}/>
   <Route path='/food/:id' element={<FoodDetail />} />
   <Route path='/cart' element={<Cart />} />
   <Route path='/checkout' element={<CheckOut />} />
   <Route path='/login' element={<LogIn />} />

  </Routes>
  <Footer />
  </BrowserRouter>
  }
   
  </>
  )
}

export default App
