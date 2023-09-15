import React from 'react';
import Sidebar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header/Header';
import '../styles/sharedlayout.scss'

const Sharedlayout = () => {
  return (
    <Container fluid className='sharelayout-container p-0 m-0' style={{ height: '100vh', overflow: 'hidden' }}>
      <Row className='m-0 p-0'>
        <Header />
      </Row>
      <Row className=' d-flex'>
        <Col xs={3} className='p-0 m-0 ms-5'>
          <Sidebar />
        </Col>
        <Col xs={7} className='position-relative me-3 outlet-part'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Sharedlayout;
