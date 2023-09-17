import React from 'react'
import { Container, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, hideAddteammatemodal, teamMatesList } from '../../store/store'
import { GrFormClose } from 'react-icons/gr'
import { Form, SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react';

type addTeamMateInputs={
    name: string,
    phonenumber: number
  }

const Addteammatemodal = () => {

    const [ teamMateName, setTeamMateName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<addTeamMateInputs>()
      const onSubmit: SubmitHandler<addTeamMateInputs> = (data) => console.log(data)

    const showTeamMateModal = useSelector((state: RootState) => state.AddteammatemodalStatus.show)
    const dispatch = useDispatch();

    const hideTeamMateModal = () =>{
        dispatch(hideAddteammatemodal());
    }

    const addTeamMatestoLocalstorage = () =>{
        dispatch(teamMatesList({name: teamMateName, phonenumber: phoneNumber}))
    }

  return (
    <Container>
        <Modal show={showTeamMateModal} onHide={hideTeamMateModal} className='mt-5'>
        <Modal.Header className=' border-2 border-bottom border-black'>
                    <Row>
                        <Modal.Title> افزودن همکار </Modal.Title>
                    </Row>
                    <Row>
                        <GrFormClose size={30} onClick={hideTeamMateModal} />
                    </Row>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-75 m-auto justify-content-center mt-3 mb-5 addtask-form'>
                        <Row>
                            <label htmlFor='teammate_name' className='my-3'>نام همگروه (نام دلخواه):</label>
                            <input {...register("name")} id='teammate_name' onChange={e => setTeamMateName(e.target.value)} />
                        </Row>
                        <Row>
                            <label htmlFor='teammate_number' className='my-3'>شماره همگروه (بدون صفر):</label>
                            <input {...register("phonenumber" , { required:true })} type='tel' maxLength={10} id='teammate_number' onChange={e => setPhoneNumber(e.target.value)} />
                        </Row>
                        {errors.phonenumber && <span>This field is required</span>}
                
                <input type="submit" onClick={() => {hideTeamMateModal(); addTeamMatestoLocalstorage();}} value='افزودن' className='w-100 mt-5 mb-3 rounded-3 p-2 h-100 border-0'/>
                    </form>
                </Modal.Body>
        </Modal>
    </Container>
  )
}

export default Addteammatemodal