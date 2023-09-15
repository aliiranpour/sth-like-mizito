import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { Form, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { hideAddTaskModal } from '../../store/store';
import { RootState } from '../../store/store';
import { GrFormClose } from 'react-icons/gr'


type addTaskInputs={
    task_title: string
    task_descrip: string
    task_type: string
    task_dead_line: Date
    task_workers: string[]
  }

const Addtaskmodal = () => {

    const dispatch = useDispatch();
    const handleShowAddTaskModal = useSelector((state: RootState) => state.addTaskModalStatus.show )

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<addTaskInputs>()
      const onSubmit: SubmitHandler<addTaskInputs> = (data) => console.log(data)
    
    console.log(handleShowAddTaskModal)

    const hideModal = () =>{
        dispatch(hideAddTaskModal())
    }

    const defaultDate = new Date();
    const formattedDefaultDate = `${defaultDate.getFullYear()}-${String(defaultDate.getMonth() + 1).padStart(2, '0')}-${String(defaultDate.getDate()).padStart(2, '0')}`;

      return (
        <Container >
            <Modal show={handleShowAddTaskModal} onHide={hideModal} className=' align-content-center modal-xs'>
                <Modal.Header className=' border-2 border-bottom border-black addtask-modal-container'>
                    <Row>
                        <Modal.Title> افزودن وظیفه </Modal.Title>
                    </Row>
                    <Row>
                        <GrFormClose size={30} onClick={hideModal} />
                    </Row>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)} className='w-75 m-auto justify-content-center mt-3 mb-5 addtask-form'>
                    <Row>
                        <label htmlFor='tasktitle' className='my-2'>عنوان وظیفه: </label>
                        <input {...register("task_title", { required: true })} id='tasktitle' />
                    </Row>
                    <Row>
                        <label htmlFor='task_description' className='my-2'>توضیحات:</label>
                        <textarea {...register("task_descrip")} id='task_dexciption' />
                    </Row>
                    <Row>
                        <Col className='ms-5'>
                            <Row className='my-2'>
                                <label htmlFor='task_type'>دسته:</label>
                            </Row>
                            <Row>
                                <input {...register("task_type", { required: true })} type='text' id='task_type' />
                            </Row>
                        </Col>
                        <Col className='me-5'>
                            <Row>
                                <label htmlFor='task_dead_line' className=' my-2'>مهلت انجام:</label>
                            </Row>
                            <Row>
                                <input id='task_dead_line' defaultValue={formattedDefaultDate} {...register("task_dead_line", {required: true})} type='date' />
                            </Row>
                        </Col>
                        <Col className='mt-3 '>
                            <Row>
                                <label htmlFor='taske_workers'>انجام دهندگان:</label>
                            </Row>
                            <Row>
                                <select className=' p-1 mt-3'>
                                    <option>محمد</option>
                                    <option>محمد</option>
                                    <option>محمد</option>
                                </select>
                            </Row>
                        </Col>
                    </Row>

                    {errors.task_title && <span>This field is required</span>}
                
                    <input type="submit" onClick={hideModal} value='افزودن' className='w-100 mt-5 mb-3 rounded-3 p-2 h-100 border-0'/>
                </form>
            </Modal>
        </Container>
      )
}

export default Addtaskmodal
