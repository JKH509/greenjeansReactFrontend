import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const AdminCustomerPage = () => {
const { customer_id } = useParams();
const [customer, setCustomer] = useState([])

useEffect(() => {
  async function fetchData() {
    const request = await axios.get(`http://localhost:5001/api/customer/${customer_id}`)
    setCustomer(request.data)
    return request;
  }
  fetchData()
}, [customer_id])// eslint-disable-line react-hooks/exhaustive-deps


const deleteCustomer = (customer_id) => {
  axios.delete(`http://localhost:5001/api/customer/delete/${customer_id}`).then((response) =>{
  })
}



  return (
    <div key={customer.customer_id}>
      <div>
        <h1>
          {customer.first_name} {customer.last_name}
        </h1>
      </div>
      <div className="d-flex text-center">
        <Link to={`/admin/edit/customer/${customer.customer_id}`}>
          Edit this customer
        </Link>
        <button onClick={(e) => deleteCustomer(`${customer.customer_id}`)}>
          Delete this customer
        </button>
      </div>
    </div>
  );
}

export default AdminCustomerPage;
