import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { Form, SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAddTaskModal } from '../../store/store';
import { RootState } from '../../store/store';

type addTaskInputs={
    task_title: string
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
    
      return (
        <Container>
            <Modal  show={handleShowAddTaskModal} onHide={hideModal}>
                <Modal.Header closeButton className=' border-2 border-bottom border-black'>
                    <Modal.Title> افزودن وظیفه </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <label htmlFor='tasktitle'>عنوان وظیفه: </label>
                        <input defaultValue="test" {...register("task_title", { required: true })} />
                    </Row>
                    <Row>
                        <label htmlFor='task_type'>دسته:</label>
                        <input {...register("task_type", { required: true })} />
                    </Row>
                    {errors.task_title && <span>This field is required</span>}
                
                    <input type="submit" onClick={hideModal} value='افزودن' />
                </form>
            </Modal>
        </Container>
      )
}

export default Addtaskmodal
