import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';


const AdminEditEmployeePage = () => {
  const { employee_id } = useParams();
  const [employee, setEmployee] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://localhost:5001/api/employee/${employee_id}`)
      setEmployee(request.data)
      console.log(request.data)
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div>
      Edit a employee{employee.first_name}
    </div>
  )
}

export default AdminEditEmployeePage
