import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const AdminCustomerPage = () => {
const { Customer_ID } = useParams();
const [customer, setCustomer] = useState([])

useEffect(() => {
  async function fetchData() {
    const request = await axios.get(`http://localhost:5001/api/customer/${Customer_ID}`)
    setCustomer(request.data[0])
    console.log(request.data[0])
    return request;
  }
  fetchData()
}, [Customer_ID])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div key={customer.Customer_ID}>
      <div>
        <h1>
          {customer.first_name} {customer.last_name}
        </h1>
      </div>
      <div className="d-flex text-center">
        <Link to={`/admin/edit/customer/${customer.Customer_ID}`}>
          Edit this customer
        </Link>
        <button onClick={(e) => alert("Soon to be deleted")}>
          Delete this customer
        </button>
      </div>
    </div>
  );
}

export default AdminCustomerPage;
