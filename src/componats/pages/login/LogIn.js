import React from 'react'
import Banner from '../../Banner/Banner'
import { Col, Container } from 'react-bootstrap'
import './login.css'

const LogIn = () => {
  return (
    <>
    <Banner title='Login'/>
    <section className='sec__login'>
        <Container className='con__login'>
            
               
                    <div className='login'>
                      <form>
                        <div className='input1'>
                        <input type='email' placeholder='Email'/>
                        </div>
                       <div className='input1'>
                       <input type='email' placeholder='Password'/>
                       </div>
                        <button className='btn__log'>Login</button>
                      </form>
                    </div>
                
            

        </Container>
    </section>
    </>
  )
}

export default LogIn