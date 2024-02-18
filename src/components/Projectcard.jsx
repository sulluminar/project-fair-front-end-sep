import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaplayerImage from '../assets/video-player.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function Projectcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={mediaplayerImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={mediaplayerImage} alt="" width={"100%"} height={"250px"} />
            </Col>
            <Col md={6} lg={6}>
              <h4>Description</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium suscipit nisi sunt molestias tempore ab esse,
                dicta officia, enim dignissimos hic laudantium maxime amet
                veritatis dolorem beatae omnis tenetur vitae.</p>
              <p><span className='fw-bolder'>Technologies:</span> HTML, CSS, React, Node</p>
            </Col>
          </Row>
          <div className='d-flex mt-3'>
            <a href="https://videoplayer-kappa-teal.vercel.app/" target="_blank" style={{ color: "black", fontSize: "25px" }}>
              <i class="fa-solid fa-link ms-3"></i></a>
            <a href="https://github.com/sulluminar/videoplayer" target="_blank" style={{ color: "black", fontSize: "25px" }}>
              <i class="fa-brands fa-github ms-3"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Projectcard