import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import { Button, Col, Image, Nav, NavItem, Row, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.scss';
import { IoMdPersonAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { showAddteammatemodal } from '../../store/store';

const Sidebar = () => {
  const [teamMatesList, setTeamMatesList] = useState([]);
  
  useEffect(() => {
    const storedTeamMatesList = JSON.parse(localStorage.getItem("teamMatesList") || '[]');
    setTeamMatesList(storedTeamMatesList);
    console.log(storedTeamMatesList)
  }, []);

  const dispatch = useDispatch();

  const addTeamMate = () => {
    dispatch(showAddteammatemodal())  
  }

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
          <Col>
            <Row className='my-3 me-1 justify-content-start w-50'>
              <Button variant='primary' onClick={addTeamMate}>
                <IoMdPersonAdd size={20} className='mx-2' />    
                <span className='fs-6 d-none d-xl-inline'>افزودن همکار</span>
              </Button>   
            </Row>
            
            <Col className=' w-75 me-3'>
              <Dropdown className=' w-100 ms-5'>
                <Row>
                  <Dropdown.Toggle variant='light' > لیست همکاران </Dropdown.Toggle>
                </Row>
                <Row>
                  <Dropdown.Menu className='w-100 m-0'>
                    {teamMatesList?.map((teamMate:any) => (
                      <Dropdown.Item key={teamMate.id} className='d-flex justify-content-start'>{teamMate.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Row>
              </Dropdown>
            </Col>
          </Col>
        </Col>              
      </Container>
    </Navbar>
  );
};

export default Sidebar;
