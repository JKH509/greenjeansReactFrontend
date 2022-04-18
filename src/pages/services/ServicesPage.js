import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import AdminServicesPage from '../admin/service_data/AdminServicesPage'
import AdminCategoriesPage from '../admin/category_data/AdminCategoriesPage'
// import { API_BASE_URL } from '../../utilities/Constants'
// import ServicesComp from '../../components/Services/ServicesComp'

const ServicesPage = ( ) => {

  const [ setServices] = useState([])

  useEffect(() => {
    async function fetchData() {
      // const request = await axios.get('http://localhost:5001/api/services/list')
      const request = await axios.get('http://localhost:5001/api/categories/list')
      setServices(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      <AdminServicesPage />
      <AdminCategoriesPage />
    </div>

  );
}

export default ServicesPage
