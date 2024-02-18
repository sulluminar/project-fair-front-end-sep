import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import homeImage from '../assets/image2.png'
import Projectcard from '../components/Projectcard'
import { Link } from 'react-router-dom'

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <>
      <div className='mb-5 bg-success' style={{ width: "100%", height: "80vh" }}>
        <div className='container-fluid rounded'>
          <Row className='align-items-center p-5'>
            <Col sm={12} md={6} lg={6}>
              <h1 className='text-light mb-3' style={{ fontSize: "70px", fontWeight: "600" }}>Project Fair</h1>
              <p>One stop destination for all web application projects</p>
              {
                isLoggedIn ?
                  <Link to='/dashboard'>
                    <button className='btn btn-warning rounded'>Manage Projects</button>
                  </Link>
                  :
                  <Link to='/login'>
                    <button className='btn btn-warning rounded'>Get Started</button>
                  </Link>
              }


            </Col>
            <Col sm={12} lg={6} md={6}>
              <img src={homeImage}
                alt="" height={"450px"}
                style={{ marginTop: "50px" }} />
            </Col>
          </Row>
        </div>
      </div>
      <div className='mt-5 all-project'>
        <div className='text-center'>
          <h1>Explore My Projects</h1>
          <marquee scrollAmount={20}>
            <div className='d-flex mt-5 mb-5'>
              <div className='ms-5' style={{ width: "400px" }} >
                <Projectcard />
              </div>
              <div className='ms-5' style={{ width: "400px" }} >
                <Projectcard />
              </div>
              <div className='ms-5' style={{ width: "400px" }}>
                <Projectcard />
              </div>
            </div>
          </marquee>
          <div className='text-center mt-5 mb-3'>
            <h6><Link to={'/project'}>See More Projects</Link></h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home