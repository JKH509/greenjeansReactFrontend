import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'

const AdminEditCustomerPage = () => {
const {customer_id} = useParams();
const [ customer, setCustomer ] = useState('')

useEffect(() => {
  async function fetchData() {
    const request = await axios.get(`http://localhost:5001/api/customer/${customer_id}`)
    setCustomer(request.data)
    return request;
  }
  fetchData()
}, [])

  return (
    <div>
      Edit customer page
      {customer.first_name}
    </div>
  )
}

export default AdminEditCustomerPage
