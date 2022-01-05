import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const AdminServicePage = () => {

  const { service_id } = useParams();
  const [service, setService] = useState('')

  useEffect(() => {
    async function fetchData() {

      const request = await axios.get(`http://localhost:5001/api/service/${service_id}`)
        //  const request = await axios.get('http://localhost:5001/api/service/4')
      
      setService(request.data)
      console.log(request)
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(`http://localhost:5001/api/customer/${customer_id}`)
  //     setService(request.data)
  //     return request;
  //   }
  //   fetchData()
  // }, [customer_id])// eslint-disable-line react-hooks/exhaustive-deps
  


  const deleteService = (service_id) => {
    axios.delete(`http://localhost:5001/api/service/delete/${service_id}`).then((response) =>{
      console.log(service.service_id)
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
          <Link rel="preconnect" to={`/service/edit/${service_id}`} >Edit</Link>
          {/* <Link></Link> */}
        </div>
        <button onClick={(e) => deleteService(`${service.service_id}`)}>Delete</button>
      </div>
    </div>
  )
}

export default AdminServicePage
