import React from 'react'
import '../../styles/logandsign.scss'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

type signinInputs={
  phonenumber: number
  email: string
  password: string
  repassword: string
}

const Signin = () => {

  const{
    register,
    handleSubmit, 
    watch,
    formState: {errors},
  } = useForm<signinInputs>()

  const onSubmit : SubmitHandler<signinInputs> = (data) => console.log(data);

  return (
    <Container fluid className='inbackground'>
      <Row className='topcirclebg m-0 d-sm-none d-lg-block'></Row>
      <Row className=' d-flex justify-content-center w-50 h-50 m-auto align-items-center border-dark'>
        <div className='formpart bg-light rounded-5 mt-5'>
        <Col className='pt-3 border-black border-2 border-dark'>
          <Row className=' border-bottom border-black border-2 mx-3 pb-3'>
            <h1>
              ثبت نام
            </h1>
          </Row>
          <Row className=''>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Col>
                <Row className='w-75 mt-2 m-auto'>
                  <label htmlFor='signinphonenumber' className=' mb-3'>تلفن همراه:</label>
                  <input defaultValue="" {...register("phonenumber", {required: true})} id='signinphonenumber'  />
                </Row>
                <Row className='w-75 mt-2 m-auto'>
                  <label htmlFor='signinemail' className=' mb-3'>ایمیل</label>
                  <input defaultValue="" {...register("email", {required: true})} id='signinuseemail'  />
                </Row>
                <Row className='w-75 my-2 mx-auto'>
                  <label htmlFor='signinpassword' className='mb-3'>رمز ورود:</label>
                  <input defaultValue="" {...register("password", {required:true})} type='password' id='signinpassword' />
                </Row>
                <Row className='w-75 my-2 mx-auto'>
                  <label htmlFor='signinrepassword' className='mb-3'>رمز ورود مجدد:</label>
                  <input defaultValue="" {...register("repassword", {required:true})} type='password' id='signinrepassword'  />
                </Row>
                <Row className=' d-lg-flex d-sm-block mb-3 w-75 mt-5 m-auto pb-5'>
                  <Col className=' w-100 h-100 justify-content-start mb-2 ms-5'>
                    <Button variant='primary' className='w-100 h-100 border-black'>
                      <NavLink to='/signin' className='text-light text-decoration-none w-100'>ثبت نام</NavLink>
                    </Button>
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


export default Signin