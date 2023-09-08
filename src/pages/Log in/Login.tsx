import React from 'react'
import '../../styles/logandsign.scss'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

type loginInputs={
  userName: string | number
  password: string
}

const Login = () => {

  const{
    register,
    handleSubmit, 
    watch,
    formState: {errors},
  } = useForm<loginInputs>()

  const onSubmit : SubmitHandler<loginInputs> = (data) => console.log(data);

  return (
    <Container fluid className='inbackground'>
      <Row className='topcirclebg m-0 d-sm-none d-lg-block'></Row>
      <Row className=' d-flex justify-content-center w-50 h-50 m-auto align-items-center border-dark'>
        <div className='formpart bg-light rounded-5 my-5'>
        <Col className=' my-3 p-2 border-black border-2 border-dark mb-2'>
          <Row className=' border-bottom border-black border-2 mx-3 pb-3'>
            <h1>
              ورود
            </h1>
          </Row>
          <Row className='mb-5'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Col>
                <Row className='w-75 mt-5 m-auto'>
                  <label htmlFor='loginusername' className=' mb-3'>نام کاربری:</label>
                  <input defaultValue="" {...register("userName", {required: true})} id='loginusername'  />
                </Row>
                <Row className='w-75 my-4 mx-auto'>
                  <label htmlFor='loginpassword' className='mb-3'>رمز ورود:</label>
                  <input defaultValue="" {...register("password", {required:true})} type='password'  />
                </Row>
                <Row className=' d-lg-flex d-sm-block mb-3 w-75 mt-5 m-auto pb-5'>
                  <Col className=' w-100 h-100 justify-content-start mb-2 ms-5'>
                      <NavLink to='/signin' className='text-light text-decoration-none w-100'>
                    <Button variant='primary' className='w-100 h-100 border-black'>
                        ثبت نام
                    </Button>
                      </NavLink>
                  </Col>
                  <Col className='w-100 h-100 justify-content-end'>
                    <input type='submit' value='ورود' className='signbtn rounded-3 w-100 ' id='log-btn'/>
                  </Col>
                </Row>
              </Col>
            </Form>
          </Row>
        </Col>
        </div>
      </Row>
      <Row className='bottomcirclebg m-0'></Row>
    </Container>
  )
}

export default Login