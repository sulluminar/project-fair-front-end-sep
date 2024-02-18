import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({ dashboard }) {
  const isDashboard = dashboard ? true : false;
  return (
    <>
      <Navbar className="bg-success">
        <Container>
          <Link to={'/'} style={{ "textDecoration": "none" }}>
            <Navbar.Brand className='text-light '>
              <i class="fa-brands fa-stack-overflow me-3 ms-5"></i>
              Project Fair
            </Navbar.Brand>
          </Link>
          {
            isDashboard &&
            <button className='btn btn-warning rounded'>logout</button>
          }

        </Container>
      </Navbar>
    </>
  )
}

export default Header