import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const AdminEmployeePage = () => {

  const { id } = useParams();
  const [employee, setEmployee] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://localhost:5001/api/employee/${id}`)
      setEmployee(request.data[0])
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:5001/api/employee/delete/${id}`).then((response) =>{
      // console.log(customer.Customer_ID)
    })
  }

  return (
    <div>
  
        <h1 key={employee.id}>{employee.first_name}{" "}{employee.last_name}</h1>
        <div >
          <Link to=''>Edit</Link>
          <Link to=''>Invoice</Link>

          <button onClick={(e) => deleteEmployee(`${employee.id}`)}>Delete</button>
          {/* <button onClick={(e) => alert('delete clicked')} >Delete</button> */}
        </div>
   
    </div>
  )
}

export default AdminEmployeePage
