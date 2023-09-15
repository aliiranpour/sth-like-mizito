import React from 'react'
import { Container, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, hideAddteammatemodal } from '../../store/store'
import { GrFormClose } from 'react-icons/gr'
import { Form, SubmitHandler, useForm } from 'react-hook-form'


type addTeamMateInputs={
    name: string,
    phonenumber: number
  }

const Addteammatemodal = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<addTeamMateInputs>()
      const onSubmit: SubmitHandler<addTeamMateInputs> = (data) => console.log(data)

    const showTeamMateModal = useSelector((state: RootState) => state.AddteammatemodalStatus.show)
    const dispatch = useDispatch();

    const hideTeamMateModal = () =>{
        dispatch(hideAddteammatemodal);
    }

  return (
    <Container>
        <Modal show={showTeamMateModal} onHide={hideTeamMateModal}>
        <Modal.Header className=' border-2 border-bottom border-black '>
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
                            <label htmlFor='teammate_name'>نام همگروه:</label>
                            <input {...register("name")} id='teammate_name' />
                        </Row>
                        <Row>
                            <label htmlFor='teammate_number'>شماره همگروه (بدون صفر):</label>
                            <input {...register("phonenumber" , { required:true })} type='number' maxLength={10} id='teammate_number' />
                        </Row>
                        {errors.phonenumber && <span>This field is required</span>}
                
                <input type="submit" onClick={hideTeamMateModal} value='افزودن' className='w-100 mt-5 mb-3 rounded-3 p-2 h-100 border-0'/>
                    </form>
                </Modal.Body>
        </Modal>
    </Container>
  )
}

export default Addteammatemodal