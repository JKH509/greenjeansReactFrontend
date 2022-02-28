import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import { Constants } from '../../../utilities/Constants'

const AdminEditCategory = () => {

  const { category_id } = useParams();
 
  const [ categoryName, setCategoryName ] = useState('')
  const [ categoryDescription, setCategoryDescription ] = useState('')
  const [ categorySeason, setCategorySeason ] = useState('')


  useEffect(() => {
    const getDataById = async () => {
      const {data} = await axios.get(`${Constants.url.API_CATEGORY_BY_ID}/${category_id}`)
  
      setCategoryName(data.category_name)
      setCategoryDescription(data.category_description)
      setCategorySeason(data.category_season)
  }
  getDataById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const updateHandler = async (e) => {

    e.preventDefault()
    // update by put request
    const data = {
      category_type: categoryName, 
      category_description: categoryDescription,
      category_price: categorySeason, 
    }
  
    await axios.put(`${Constants.url.API_EDIT_CATEGORY_BY_ID}/${category_id}`, data)
    // history.push('/services')
  }


  return (
    <form onSubmit={updateHandler} className='container'>
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Add Service Information
            {/* {newServiceName} here */}
          </h3>
        </div>

        <div className="space-y-6 sm:space-y-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="newServiceName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Service name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                value={categoryName}
                name="categoryName"
                id="categoryName"
                onChange={(e) => setCategoryName(e.target.value)}
                className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="categorySeason"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Edit seasons available
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="categorySeason"
                id="categorySeason"
                value={categorySeason}
                onChange={(e) => setCategorySeason(e.target.value)}
                className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div> 


          <div className="sm:grid sm:grid-cols-3 sm:gap-4">
            <label
              htmlFor="newServiceDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Edit description
            </label>
            <div className="mt-1">
              <textarea
              style={{height:"100px"}}
                type="text"
                name="newServiceDescription"
                id="newServiceDescription"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>




        </div>
      </div>
    </div>

    <div className="pt-5 ">
      <div className="flex justify-end sm:border-t pt-3">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        
        <button
        type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
      </div>
    </div>
  </form>
  )
}

export default AdminEditCategory
