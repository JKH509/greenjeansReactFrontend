import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
// import { API_BASE_URL } from '../../../utilities/Constants'

const AdminCustomerInvoicePage = () => {
  const { Customer_ID } = useParams();
  const [customer, setCustomer]= useState([]);
  // const [amount, setAmount] = useState(0)
  // const [workDone, setWorkDone] = useState('')
  // const [invoiceDate, setInvoiceDate] = useState('')



  useEffect(() => {
    async function fetchData() {
      
      const request = await axios.get(`https://node.greenjeans509.com/api/customer/${Customer_ID}`)
      setCustomer(request.data[0])
      // console.log(request.data[0])
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
