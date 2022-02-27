import React,  {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { API_BASE_URL } from '../../../utilities/Constants'

const AdminCategoriesPage = () => {

  const [ categories, setCategory ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://node.greenjeans509.com/api/categories/list')
       setCategory(request.data)
      console.log(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const click = () => {
    alert('clicked')
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-8">
          {categories.map((product) => (
            <div
              key={product.category_id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={`https://node.greenjeans509.com/${product.category_image}`}
                  
                  alt={product.category_name}
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link to={`/admin/category/${product.category_id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.category_name === 'Snow' ? <>{product.category_name}</> : <>{product.category_name}'s</>}
                    {/* {product.category_name} */}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{product.category_description}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm italic text-gray-500">{product.category_season}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  )
}

export default AdminCategoriesPage
