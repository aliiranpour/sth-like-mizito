import React from 'react';
import Sidebar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/sharedlayout.scss';

const Sharedlayout = () => {
  return (
    <Container fluid className='sharelayout-container'>
      <Row className='sidebar-col'>
        <Col xs={3} className='px-0'>
            <Sidebar />
        </Col>
        <Col  className='main-content-col'>
            <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Sharedlayout;
