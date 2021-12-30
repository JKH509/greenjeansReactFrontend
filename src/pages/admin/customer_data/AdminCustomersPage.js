import React,{ useState, useEffect} from 'react';
import axios from 'axios';
// import { store } from '../../../app/store';
// import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

const AdminCustomersPage = () => {

  // const dispatch = useDispatch();
  const [customers, setCustomers]= useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://localhost:5001/api/customer/list')
      setCustomers(request.data)
      return request;
    }
    fetchData()
     }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {customers.map((customer) => (
        <div key={customer.Customer_ID}>
          <h1>
            {customer.first_name} {customer.last_name}
            <Link
              rel="preconnect"
              to={`/admin/customer/${customer.Customer_ID}`}
            >
              See Customer
            </Link>
            {/* <input type='text' value={customer.Customer_ID} /> */}
            <Link to={`/admin/customer/invoice/${customer.Customer_ID}`}>Create Invoice</Link>
          </h1>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default AdminCustomersPage;
