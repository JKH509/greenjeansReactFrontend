import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ServicesComp from '../../components/Services/ServicesComp'

const ServicesPage = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://localhost:5001/api/services/list')
      setServices(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
    {services.map((service) => (
      <div key={service.service_id}>
        <h1>
          {service.service_type} 
          {service.service_id} 
        </h1>
        {/* <Link rel="preconnect" to={`/admin/service/${service.service_id}`}> */}
        <Link rel="preconnect" to='/admin/service/4'>
          See Service
        </Link>
      </div>
    ))}
  </div>
  )
}

export default ServicesPage
