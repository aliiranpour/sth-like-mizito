import React, {  useState } from 'react'
import '../../styles/logandsign.scss'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type signinInputs={
  phonenumber: number
  email: string
  password: string
  repassword: string
}

const Signin = () => {
  
  const navigate = useNavigate();

  const[ email, setEmail ] = useState<string>("") ;
  const[ phonenumber, setPhonenumber ] = useState<number>();
  const[ password, setPassword ] = useState<string>("");
  const[ repassword, setRepassword ] = useState<string>("");
  const[ passErrorMsg, setPassErrorMsg ] = useState<string>("");
  const[ id, setId ] = useState<number>(1000);
  const[ emailErrorMsg, setEmailErrorMsg] = useState<string>("")
  const[ phoneErrorMsg, setPhoneErrorMsg] = useState<string>("")

  const{
    register,
    handleSubmit, 
    formState: {errors},
  } = useForm<signinInputs>()

  const onSubmit: SubmitHandler<signinInputs> = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingEmail = storedUsers.find((user: any) => user.email === email);
    const existingPhone = storedUsers.find((user: any) => user.phonenumber === phonenumber);

    if (existingEmail) {
      setEmailErrorMsg('این ایمیل قبلاً ثبت شده است');
    } else setEmailErrorMsg('');
    if (existingPhone) {
      setPhoneErrorMsg('این شماره تلفن قبلاً ثبت شده است');
    } else setPhoneErrorMsg('');
    if (!(password === repassword)) {
      setPassErrorMsg('رمز عبور و تکرار رمز عبور یکسان نیست');
    }else setPassErrorMsg('');

    if(!existingEmail && !existingPhone && password===repassword){
      const newUser = {
        id: id,
        email,
        phonenumber,
        password,
      };
      const updatedUsers = [...storedUsers, newUser];
      console.log(updatedUsers)
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setId(id + 1);
      console.log(id)
      navigate('/home')
    }
  };


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
                  <input defaultValue="" {...register("phonenumber", {required: true}) } maxLength={10} type='tel' id='signinphonenumber' onChange={ e => setPhonenumber(parseInt(e.target.value))}/>
                </Row>
                <Row className='w-75 mt-2 m-auto'>
                  <label htmlFor='signinemail' className=' mb-3'>ایمیل</label>
                  <input defaultValue="" {...register("email", {required: true})} id='signinuseemail' type='email' onChange={ e => setEmail(e.target.value)} />
                </Row>
                <Row className='w-75 my-2 mx-auto'>
                  <label htmlFor='signinpassword' className='mb-3'>رمز ورود:</label>
                  <input defaultValue="" {...register("password", {required:true})} type='password' id='signinpassword' onChange={e => setPassword(e.target.value)} />
                </Row>
                <Row className='w-75 my-2 mx-auto'>
                  <label htmlFor='signinrepassword' className='mb-3'>رمز ورود مجدد:</label>
                  <input defaultValue="" {...register("repassword", {required:true})} type='password' id='signinrepassword' onChange={e => setRepassword(e.target.value)} />
                </Row>
                <Row>
                  <p>{phoneErrorMsg}</p>
                  <p>{emailErrorMsg}</p>
                  <p>{passErrorMsg}</p>
                </Row>
                <Row className=' d-lg-flex d-sm-block mb-3 w-75 mt-5 m-auto pb-5'>
                  <Col className=' w-100 h-100 justify-content-start mb-2 ms-5'>
                    <Button variant='primary' className='w-100 h-100 border-black p-0'>
                      <input type='submit' value='ثبت نام' className=' bg-primary text-light text-decoration-none w-100 border-0' />
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

