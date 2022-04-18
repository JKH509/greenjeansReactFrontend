import React, {useState } from 'react'
import axios from 'axios'
import { Constants } from '../../../utilities/Constants'
import { useNavigate } from 'react-router'
import ResponsiveSideNav from '../dashboard/ResponsiveSideNav'

const AdminAddCategory = () => {
  let navigate = useNavigate()

  const [ categoryName, setCategoryName ] = useState('')
  const [ categoryDescription, setCategoryDescription ] = useState('')
  const [ categorySeason, setCategorySeason ] = useState('')
  const [ category_image, setCategoryImage ] = useState('')

  
  
  const addCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_name", categoryName);
    formData.append("category_description", categoryDescription);
    formData.append("category_season", categorySeason);
    formData.append("category_image", category_image);

    axios.post(`${Constants.url.API_ADD_CATEGORY}`, formData);
    navigate("/dashboard/admin/categories")
  };


  return (
    <>
    <ResponsiveSideNav dashboardContent={
      <form
      className="space-y-8 divide-y divide-gray-200 container"
      onSubmit={addCategory}
      method="POST"
       encType='multipart/form-data'
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add Category Information
            </h3>
          </div>

          <div>
            <label>Upload category image</label>
            <input type="file" name="service_image" size='lg' onChange={(e) => setCategoryImage(e.target.files[0])} />
          </div>

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="categoryName"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Category name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="categoryName"
                  id="categoryName"
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>


          <div className="sm:grid sm:grid-cols-3 sm:gap-4  ">
              <label
                htmlFor="categorySeason"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Category season(s)
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  id="categorySeason"
                  name="categorySeason"
                  onChange={(e) => setCategorySeason(e.target.value)}
                  className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>




            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
              <label
                htmlFor="categoryDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Add a description for the new category
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  name="categoryDescription"
                  id="categoryDescription"
                  onChange={(e) => setCategoryDescription(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          
         
      <div className="pt-5">
        <div className="flex justify-end">
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
      </div>
    </form>
    } />
    </>
    
  )
}

export default AdminAddCategory
