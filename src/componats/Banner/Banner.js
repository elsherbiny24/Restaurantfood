import React from 'react';
import './banner.css'
import { Container } from 'react-bootstrap';

const Banner = (props) => {
  return (
   <>
   <section className='Banner__sec'>
    <Container>
        <h2 className='title__banner'>{props.title}</h2>
    </Container>
   </section>
   </>
  )
}

export default Banner