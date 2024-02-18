import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Projectcard from '../components/Projectcard'

function Project() {
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
        <h2>All Projects</h2>
        <div className='mt-5 w-25 d-flex'>
          <input type="text" className='form-control' placeholder='Serch project using technology' />
          <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{ marginLeft: "-45px" }}></i>
        </div>
      </div>
      <Row className='m-5'>
        <Col sm={12} lg={6} md={6}>
          <Projectcard />
        </Col>
      </Row>
    </>

  )
}

export default Project