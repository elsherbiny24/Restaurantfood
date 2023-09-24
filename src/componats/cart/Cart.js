import React from "react";
import "./cartproducts.css";
import Banner from "../Banner/Banner";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../shopping-cart/Cartslice";
import TR from "./TR";
import { Link } from "react-router-dom";


const Cart = () => {
   
    const Total__price = useSelector(state => state.cart.totalAmount);

  const cartProducts = useSelector((state) => state.cart.cartProducts);
  console.log(cartProducts);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const handleDeleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <>
      <Banner title="your cart" />
      <section className="cart__item">
        <Container>
          <Row>
            <Col lg={12}>
              {!cartProducts || cartProducts.length === 0 ? (
                <h2 className="h2__cart">cart is empty</h2>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center Image__th th__head">Image</th>
                      <th className="text-center th__head">Product Title</th>
                      <th className="text-center th__head">Price</th>
                      <th className="text-center th__head">Quantity</th>
                      <th className="text-center th__head">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts &&
                      cartProducts.map((item) => (
                        <TR
                          item={item}
                          key={item.id}
                          handleRemoveItem={handleRemoveItem}
                          handleDeleteItem={handleDeleteItem}
                        />
                      ))}
                  </tbody>
                </table>
              )}

           <div className="text__cart">
           <div >
                <h6 className="h6__price">
                Subtotal: $<span>{Total__price}</span>

                </h6>
                <p className="ppp">Taxes and shipping will calculate at checkout</p>
              </div>
              <div className="btn__ADD">
                <button className="btn__ADDtocart btn__ADDtocart__1"><Link to='/food'>continue shopping</Link></button>
                <button className="btn__ADDtocart"><Link to='/checkout'>proceed to checkout</Link></button>
              </div>
           </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;