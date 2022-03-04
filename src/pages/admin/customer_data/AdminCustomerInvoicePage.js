import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { Constants } from '../../../utilities/Constants'
import BackButtons from '../../../components/buttons/BackButtons';

const AdminCustomerInvoicePage = () => {
  const { customer_id } = useParams();

  const [customer, setCustomer]= useState('');
  // const [amount, setAmount] = useState(0)
  // const [workDone, setWorkDone] = useState('')
  // const [invoiceDate, setInvoiceDate] = useState('')



  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${Constants.url.API_GET_CUSTOMER_BY_ID}/${customer_id}`)
      setCustomer(request.data)
      console.log(request.data)
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      Create an Invoice:{" "}
      {customer_id}
      <h5>{customer.first_name}</h5>
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
      <BackButtons />
    </div>
  )
}

export default AdminCustomerInvoicePage
