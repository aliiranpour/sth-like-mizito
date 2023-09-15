import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {BsPlus} from 'react-icons/bs'
import { showAddTaskModal } from '../../store/store'
import { useDispatch } from 'react-redux'
import Addtaskmodal from '../../modals/addtaskmodal/Addtaskmodal'
import Addteammatemodal from '../../modals/addteammatemodal/Addteammatemodal'

const Tasks = () => {

const dispatch = useDispatch();

const handleShowAddTaskModal = () => {
  dispatch(showAddTaskModal());
};

  return (
    <Container>
      <Col className=' d-flex'>
        <Row className=' d-flex border-bottom border-2 border-black pb-2 w-100'>
          <Col xs={9}>
            <h1>وظایف</h1>
          </Col>
          <Col className=' align-self-center justify-content-end' xs={3}>
            <Button className=' w-100' onClick={handleShowAddTaskModal}>
              <BsPlus size={32} />
              <span className=' d-sm-none d-lg-inline'>ایجاد وظیفه</span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Addtaskmodal />
        </Row>
        <Row>
          <Addteammatemodal />
        </Row>
      </Col>
    </Container>
  )
}

export default Tasks