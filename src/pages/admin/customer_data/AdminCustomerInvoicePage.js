import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { Constants } from '../../../utilities/Constants'

const AdminCustomerInvoicePage = () => {
  const { Customer_ID } = useParams();
  const [customer, setCustomer]= useState([]);
  // const [amount, setAmount] = useState(0)
  // const [workDone, setWorkDone] = useState('')
  // const [invoiceDate, setInvoiceDate] = useState('')



  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${Constants.url.API_GET_CUSTOMER_BY_ID}/${Customer_ID}`)
      setCustomer(request.data[0])
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
