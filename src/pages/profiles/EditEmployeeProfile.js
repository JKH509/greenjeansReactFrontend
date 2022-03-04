import React from 'react'
import {  useParams } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';
import BackButtons from '../../components/buttons/BackButtons'

const EditEmployeeProfile = () => {
  // let navigate = useNavigate();
  let { id } = useParams();

  return (

    <div className='container'>
      <div>
      Edit Employee Profile
      </div>
<div >we will edit based on your id: {id}</div>
      <BackButtons />
    </div>

  )
}

export default EditEmployeeProfile