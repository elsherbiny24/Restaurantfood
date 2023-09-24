import React, { useEffect, useState } from "react";
import "./section5.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../../../assets/fake-data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useDispatch } from "react-redux";
import { cartActions } from "../../shopping-cart/Cartslice";
import { toast, ToastContainer } from "react-toastify";

const Section5 = () => {
  const Notify = () => {
    toast.success("Product added to cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const dispatch = useDispatch();

  const addToCartHandler = (id, title, image01, price) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    setHotPizza(filteredPizza);
  }, []);

  return (
    <>
      <section className="Hot__Pizza">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="tittle__Hotpizza">Hot Pizza</h1>
            </Col>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 9500 }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {hotPizza.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="product__pizza">
                    <div className="product__img">
                      <Link to={`/food/${item.id}`} className="link">
                        <img src={item.image01} className="img__pizza" alt="" />
                      </Link>
                    </div>
                    <h5 className="h5__link">
                      <Link
                        to={`/food/${item.id}`}
                        className="link link__title"
                      >
                        {item.title}
                      </Link>
                    </h5>
                    <div className="item__price">
                      <p>${item.price}</p>
                      <button
                        className="btn__ADDtocart"
                        onClick={() => {
                          addToCartHandler(
                            item.id,
                            item.title,
                            item.image01,
                            item.price
                          );
                          Notify();
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
          <ToastContainer />
        </Container>
      </section>
    </>
  );
};

export default Section5;
