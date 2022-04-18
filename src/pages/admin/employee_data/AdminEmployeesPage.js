import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Constants } from '../../../utilities/Constants'
import FiveRowTable from '../../../components/tables/FiveRowTable';

const AdminEmployeesPage = () => {
  let navigate = useNavigate()
  
  const [ employees, setEmployees ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    async function fetchData() {
      axios.get(`${Constants.url.API_GET_ALL_EMPLOYEES}`).then(
        (request) => {
          setIsLoaded(true);
          setEmployees(request.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  

  const addEmployeeButton = () => {
    navigate("/dashboard/admin/create/employee");
  };

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <h2>Loading...</h2>;
  } else {
    return (

      <FiveRowTable
        array={employees}
        pageTitle={"Employees"}
        pageDescription={
          "A complete list of Employees, address, postions, phone, and their whole portfolio"
        }
        field1={"Name"}
        field2={"Address"}
        field3={"Postion"}
        field4={"Phone"}
        buttonTitle={"Add Employee"}
        buttonEvent={() => addEmployeeButton()}
      />
    );
  }
}

export default AdminEmployeesPage;
