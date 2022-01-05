import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminServicesPage = () => {


  const [services, setServices] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://localhost:5001/api/services/list')
      setServices(request.data)
      console.log(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {services.map((service) => (
        <div key={service.service_id}>
          <div><img src={`http://localhost:5001/${service.service_image}`} alt={service.service_type} /></div>
          <h1>
            {service.service_type} 
            Service id
            {service.service_id}
          </h1>
          <Link rel="preconnect" to={`/admin/service/${service.service_id}`}>
            See Service
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AdminServicesPage
