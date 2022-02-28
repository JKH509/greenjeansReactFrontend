import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Constants } from '../../../utilities/Constants'

const AdminServicePage = () => {

  const { service_id } = useParams();
  const [service, setService] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${Constants.url.API_SERVICE_BY_ID}/${service_id}`)
      setService(request.data)
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  


  const deleteService = (service_id) => {
    axios.delete(`${Constants.url.API_DELETE_SERVICE}/${service_id}`).then((response) =>{
      // console.log(service.service_id)
    })
  }
 

  return (
    <div>
      Service
      {service.service_type}
      {service.service_id}

      <div>
      <p>{service.service_description}</p>
      <p>{service.service_price}</p>
        <div>
          <Link rel="preconnect" to={`/admin/edit/service/${service_id}`} >Edit</Link>
          {/* <Link></Link> */}
        </div>
        <button onClick={(e) => deleteService(`${service.service_id}`)}>Delete</button>
      </div>
    </div>
  )
}

export default AdminServicePage
