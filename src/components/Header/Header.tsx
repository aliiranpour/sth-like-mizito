import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../styles/header.scss'

const Header = () => {
  return (
    <Container className='header-container'>
        <Row>
          <Col xs={4} className='d-flex justify-content-end'>
            <p>نام  کاربر</p>
          </Col>
          <Col xs={6} className='d-flex justify-content-end ps-5'>
            <p>خروج</p>
          </Col>
        </Row>
    </Container>
  )
}

export default Header