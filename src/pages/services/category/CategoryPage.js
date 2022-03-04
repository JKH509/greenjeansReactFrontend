import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Constants } from '../../../utilities/Constants';

// import { API_BASE_URL } from '../../../utilities/Constants'


const CategoryPage = () => {
  const [ categories, setCategory ] = useState([])

  useEffect(() => {
    async function fetchData() {
      
      const request = await axios.get(`${Constants.url.API_GET_ALL_SERVICES}`)
       setCategory(request.data)
      return request;
    }
    console.log(categories)
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps





  return (
    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-8">
        {categories.map((product) => (
          <div
            key={product.service_id}
            className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
          >
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
              <img
                src={`${Constants.url.API_URL}/${product.service_image}`}
                
                alt={product.category_name}
                className="w-full h-full object-center object-cover sm:w-full sm:h-full"
              />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
              <h3 className="text-sm font-medium text-gray-900">
                <Link to={`/${product.service_type}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.service_type === 'Snow' ? <>{product.service_type}</> : <>{product.service_type}</>}
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

export default CategoryPage
