import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";

const AdminCustomerInvoicePage = () => {
  const { Customer_ID } = useParams();
  const [customer, setCustomer]= useState([]);
  // const [amount, setAmount] = useState(0)
  // const [workDone, setWorkDone] = useState('')
  // const [invoiceDate, setInvoiceDate] = useState('')



  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://localhost:5001/api/customer/${Customer_ID}`)
      setCustomer(request.data[0])
      console.log(request.data[0])
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      Create an Invoice
      {customer.first_name}
    </div>
  )
}

export default AdminCustomerInvoicePage
