import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../styles/header.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Header = () => {

  const username = useSelector((state: RootState) => state.user.userEmail)
  console.log(username)

  return (
    <Container className='header-container'>
        <Row>
          <Col xs={4} className='d-flex justify-content-end'>
            {/* when refresh page lost login info */}
            <p className=''>{username}</p>
          </Col>
          <Col xs={6} className='d-flex justify-content-end ps-5'>
            <p>خروج</p>
          </Col>
        </Row>
    </Container>
  )
}

export default Header