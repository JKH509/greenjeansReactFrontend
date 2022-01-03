import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const AdminServicePage = () => {

  const { id } = useParams();
  const [service, setService] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://localhost:5001/api/service/${id}`)
      console.log(request)
      setService(request.data)
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  const deleteService = (id) => {
    axios.delete(`http://localhost:5001/api/service/delete/${id}`).then((response) =>{
      console.log(service.id)
    })
  }
 

  return (
    <div>
      Service
      {service.ServiceType}
      {service.id}

      <div>
      <p>{service.ServiceDescription}</p>
      <p>{service.ServicePrice}</p>
        <div>
          <Link rel="preconnect" to={`/service/edit/${id}`} >Edit</Link>
          {/* <Link></Link> */}
        </div>
        <button onClick={(e) => deleteService(`${service.id}`)}>Delete</button>
      </div>
    </div>
  )
}

export default AdminServicePage
