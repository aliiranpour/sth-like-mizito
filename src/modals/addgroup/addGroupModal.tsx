import React, { useState } from 'react';
import { Container, Modal, Row, Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import { showAddgroup, hideAddgroup, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import { useForm } from 'react-hook-form';

type AddGroupNameInputs = {
  GroupName: string;
};

const AddGroup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm<AddGroupNameInputs>();

  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState<string>('');

  const hideAddGroupModal = () => {
    dispatch(hideAddgroup());
    reset(); 
  };

  const showModal = useSelector((state: RootState) => state.AddGroup.show);

  const onSubmit = (data: AddGroupNameInputs) => {
    console.log(data);
    hideAddGroupModal(); 
  };

  return (
    <Container>
      <Modal show={showModal} onHide={hideAddGroupModal} className='mt-5'>
        <Modal.Header className=' border-2 border-bottom border-black'>
          <Row>
            <Modal.Title>افزودن گروه</Modal.Title>
          </Row>
          <Row>
            <GrFormClose size={30} onClick={hideAddGroupModal} />
          </Row>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-75 m-auto justify-content-center mt-3 mb-5 addtask-form'
          >
            <Row>
              <label htmlFor='GroupName' className='my-3'>
                نام گروه:
              </label>
              <input
                {...register('GroupName', { required: true })}
                id='GroupName'
                onChange={(e) => setGroupName(e.target.value)}
              />
              {errors.GroupName && (
                <span className='text-danger'>نام گروه را وارد کنید</span>
              )}
            </Row>

            <Button
              type='submit'
              variant='primary'
              className='w-100 mt-5 mb-3 rounded-3 p-2 h-100'
            >
              افزودن
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AddGroup;
