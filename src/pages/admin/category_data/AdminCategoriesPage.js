import React,  {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Constants } from '../../../utilities/Constants'
import { CategoryTableWithImage } from '../admin_components/tables/CategoryTableWithImage';
import ResponsiveSideNav from '../dashboard/ResponsiveSideNav';

const AdminCategoriesPage = () => {

  let navigate = useNavigate()
  const [ categories, setCategory ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${Constants.url.API_GET_ALL_CATEGORIES}`)
       setCategory(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const addButton = () => {
    navigate('/dashboard/admin/create/category')
  }

  return (
    <>
      <ResponsiveSideNav
        dashboardContent={
          <CategoryTableWithImage
            array={categories}
            pageTitle={"Categories"}
            pageDescription={
              "A list of all the current categories, supervisors, seasons offered, and the current image"
            }
            buttonName={"Add Category"}
            addClickEvent={() => {
              addButton();
            }}
            field1={"Category Name"}
            field2={"Supervisor"}
            field3={"Season(s)"}
            field4={"Category Img"}
          />
        }
      />
    </>
  );
}

export default AdminCategoriesPage
