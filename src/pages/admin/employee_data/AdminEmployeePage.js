import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";

const AdminEmployeePage = () => {

  const { id } = useParams();
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://localhost:5001/api/employee/${id}`)
      setEmployees(request.data)
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {employees.map((employee) => (
        <h1 key={employee.id}>{employee.first_name}{" "}{employee.last_name}</h1>
      ))}
    </div>
  )
}

export default AdminEmployeePage
