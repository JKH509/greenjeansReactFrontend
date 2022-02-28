import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Constants } from '../../../utilities/Constants'

const AdminCategoryPage = () => {

  const { category_id } = useParams();
  const [category, setCategory] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${Constants.url.API_CATEGORY_BY_ID}/${category_id}`)
        setCategory(request.data)
      return request;
    }
    fetchData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      Category <br/>
      {category.category_name}
      <br/>
      <div>
        <img className='img-fluid' src={`${Constants.url.API_URL}/${category.category_image}`} style={{width:'350px'}} alt={category.category_name} />
      </div>

      <div>
      <p>{category.category_description}</p>
      <p>Available in the {category.category_season}</p>
        <div>
          <Link rel="preconnect" to={`/admin/edit/category/${category_id}`} >Edit</Link>
          {/* <Link></Link> */}
        </div>
        <button onClick={(e) => alert('deleted')}>Delete</button>
        {/* <button onClick={(e) => deleteCategory(`${category.category_id}`)}>Delete</button> */}
      </div>
    </div>
  )
}

export default AdminCategoryPage
