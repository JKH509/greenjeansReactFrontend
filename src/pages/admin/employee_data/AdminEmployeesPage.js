import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminEmployeesPage = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://localhost:5001/api/employee/list')
      setEmployees(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h1>
            {employee.first_name} {employee.last_name}
          </h1>
          <Link rel="preconnect" to={`/admin/employee/${employee.id}`}>
            See Employee
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AdminEmployeesPage;
