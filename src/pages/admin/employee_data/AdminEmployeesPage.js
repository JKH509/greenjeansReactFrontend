import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Constants } from '../../../utilities/Constants'

const AdminEmployeesPage = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${Constants.url.API_GET_ALL_EMPLOYEES}`)
      setEmployees(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The People</h2>
          <p className="text-xl text-gray-500">
            Search by department and schedule coming eventually
          </p>
        </div>
        <ul
          
          className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
        >
          {employees.map((person) => (
            <li key={person.employee_id}>
              <div className="space-y-4">
                {/* <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" /> */}
                <img src={`${Constants.url.API_URL}/${person.employee_image}`} alt={person.first_name} />
                <div className="space-y-2">
                  <div className="text-xs font-medium lg:text-sm">
                    <h3>{person.first_name}{" "}{person.last_name}</h3>
                    <p className="text-indigo-600">{person.job_title}</p>
                    <Link rel="preconnect" to={`/admin/employee/${person.employee_id}`}>
             See Employee
           </Link>
                </div>
                  </div>
                     
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>


    // <div>
    //   {employees.map((employee) => (
    //     <div key={employee.id}>
    //       <h1>
    //         {employee.first_name} {employee.last_name}
    //       </h1>
    //       <Link rel="preconnect" to={`/admin/employee/${employee.employee_id}`}>
    //         See Employee
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}

export default AdminEmployeesPage;
