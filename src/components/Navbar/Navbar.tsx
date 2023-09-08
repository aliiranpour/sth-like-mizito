import React from 'react';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import { Button, Col, Image, Nav, NavItem, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.scss';
import { IoMdPersonAdd } from 'react-icons/io';


const Sidebar = () => {
  return (
    <Navbar expand="lg" className=''>
      <Container>
          <Col className='nav-content p-0'>
            <div className='border-bottom mx-1'>
              <Row>
                <Nav.Item>
                  <NavLink to='/home' className='nav-item'>وظایف</NavLink>
                </Nav.Item>
              </Row>
              <Row>
                <NavItem>
                  <NavLink to='/home/tasks type' className='nav-item'>دسته بندی کارها</NavLink>
                </NavItem>
              </Row>
              <Row>
                <NavItem>
                  <NavLink to='/home/notes' className='nav-item'>یادداشت ها</NavLink>
                </NavItem>
              </Row>
            </div>
            <Row className='my-3 me-1 justify-content-start w-50'>
              <Button variant='primary'>
                <IoMdPersonAdd size={20} className='mx-2' />    
                <span className='fs-6 d-none d-xl-inline'>افزودن همکار</span>
              </Button>   
            </Row>
          </Col>
                
      </Container>
    </Navbar>
  );
};

export default Sidebar;
