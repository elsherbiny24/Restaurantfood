import React, { useState, useRef, useEffect } from "react";
import Banner from "../Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import "./allfoods.css";
import { BsSearch } from "react-icons/bs";
import products from "../../assets/fake-data/products";
import ProductCard from "../home/section4/ProductCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../shopping-cart/Cartslice";
import ReactPaginate from "react-paginate";
import WOW from "wowjs";
import { toast,ToastContainer } from 'react-toastify';

const AllFoods = () => {
  const Notify =() =>{
    toast.success('Product added to cart' ,{
      position:toast.POSITION.BOTTOM_RIGHT,
     
    })
   
  }
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const productPerPage = 8;
  const [filteredProducts, setFilteredProducts] = useState(products);
  const cartProducts = useSelector((state) => state.cart.cartProducts); // <-- new code

  useEffect(() => {
    setCurrentPage(0);
    setVisibleProducts(filteredProducts.slice(0, productPerPage));
  }, [searchItem, filteredProducts, productPerPage]);

  useEffect(() => {
    setVisibleProducts(
      filteredProducts.slice(
        currentPage * productPerPage,
        (currentPage + 1) * productPerPage
      )
    );
  }, [currentPage, filteredProducts, productPerPage]);

  const handlePageClick = (event) => {
    const nextPage = event.selected;
    setCurrentPage(nextPage);
  };

  const handleSearch = (event) => {
    const value = event.target.value.trim().toLowerCase();
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFilteredProducts(results);
    setSearchItem(value);
  };

  const Add__tocart = (id, title, image01, price) => {
    const existingProduct = cartProducts.find((product) => product.id === id);
    if (existingProduct) {
      dispatch(
        cartActions.addItem({
          id,
          title,
          image01,
          price,
        })
      );
    } else {
      dispatch(
        cartActions.addProducts([
          {
            id,
            title,
            image01,
            price,
            quantity: 1,
          },
        ])
      );
    }
  };

  return (
    <>
      <Banner title="ALL Foods" />
      <section className="all__foods">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className="search__input wow slideInLeft">
                <input
                  type="text"
                  value={searchItem}
                  onChange={handleSearch}
                  placeholder="I'm looking for...."
                />
                <span>
                  <BsSearch />
                </span>
              </div>
            </Col>
          </Row>
          <Row className="wow fadeInUp">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((item) => (
                <Col lg={3} md={4} sm={6} xs={6} key={item.id}>
                  <div className="product__item wow pulse">
                    <div className="product__img">
                      <Link to={`/food/${item.id}`} className="link">
                        <img
                          src={item.image01}
                          alt={item.title}
                          className="img__product"
                        />
                      </Link>
                    </div>
                    <h5 className="h5">
                      <Link to={`/food/${item.id}`} className="link">
                        {item.title}
                      </Link>
                    </h5>
                    <div className="item__price">
                      <p>${item.price}</p>
                      <button
  className="btn__ADDtocart"
  onClick={() => {
    Add__tocart(item.id, item.title, item.image01, item.price);
    Notify();
  }}
>
  Add To Cart
</button>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <h1 className="text-center product__found">Product not found</h1>
            )}
          </Row>
          <Row className="pagination__container wow fadeInUp">
            <ReactPaginate
              pageCount={Math.ceil(filteredProducts.length / productPerPage)}
              onPageChange={handlePageClick}
              previousLabel="prev"
              nextLabel="next"
              containerClassName="paginate"
              activeClassName="active__page"
            />
          </Row>
          <ToastContainer />
        </Container>
      </section>
    </>
  );
};

export default AllFoods;