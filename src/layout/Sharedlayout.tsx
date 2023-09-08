import React from 'react';
import Sidebar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header/Header';

const Sharedlayout = () => {
  return (
    <Container fluid className='sharelayout-container p-0 m-0' style={{ height: '100vh', overflow: 'hidden' }}>
      <Row className='m-0 p-0'>
        <Header />
      </Row>
      <Row>
        <Col xs={3} className='p-0 m-0'>
          <Sidebar />
        </Col>
        <Col xs={9} className='m-0 p-0 position-relative'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Sharedlayout;
