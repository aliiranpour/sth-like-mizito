import React from 'react';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import { Button, Col, Image, Nav, NavItem, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.scss';
import { IoMdPersonAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { showAddteammatemodal } from '../../store/store';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

const Sidebar = () => {

  const teamMatesList = JSON.parse(localStorage.getItem("teamMatesList") || '[]' )
  console.log(teamMatesList[0].name)

  const dispatch = useDispatch();

  const addTeamMate = () =>{
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
              <Col>
                <Dropdown className=' d-flex m-0 p-0'>
                  <Row>
                    <Dropdown.Toggle className=' me-3 justify-content-end w-100'> لیست همکاران </Dropdown.Toggle>
                  </Row>
                  <Row>
                    <Dropdown.Menu className=' justify-content-start w-75 ms-5 '>
                        {teamMatesList.map((teamMate:any) => (
                        <Dropdown.Item key={teamMate.id}>{teamMate.name}</Dropdown.Item>
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
