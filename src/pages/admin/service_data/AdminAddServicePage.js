import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Constants } from '../../../utilities/Constants'
import ResponsiveSideNav from '../dashboard/ResponsiveSideNav'



const AdminAddServicePage = () => {

  const [ newServiceName, setNewServiceName ] = useState('')
  const [ newServiceDescription, setNewServiceDescription ] = useState('')
  const [ newServicePrice, setNewServicePrice ] = useState(0.0)
  const [ newServiceWarranty, setNewServiceWarranty ] = useState('No')
  const [ newServiceWarrantyDescription, setNewServiceWarrantyDescription] = useState('')
  const [ service_image, setServiceImage ] = useState('')
  const [ category_id, setCategory_id ] = useState(0)

  const [ categoryList, setCategoryList ] = useState([])
  

  // const [ newServiceSeasonSpringCheckBox, setNewServiceSeasonSpringCheckBox ] = useState('')
  // const [ newServiceSeasonSummerCheckBox, setNewServiceSeasonSummerCheckBox ] = useState('')
  // const [ newServiceSeasonFallCheckBox, setNewServiceSeasonFallCheckBox ] = useState('')
  // const [ newServiceSeasonWinterCheckBox, setNewServiceSeasonWinterCheckBox ] = useState('')

  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${Constants.url.API_GET_ALL_CATEGORIES}`)
      setCategoryList(request.data)
      return request;
    }
    fetchData()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  
  const addService = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("service_type", newServiceName);
    formData.append("service_description", newServiceDescription);
    formData.append("service_price", newServicePrice);
    formData.append("service_warranty", newServiceWarranty);
    formData.append("warranty_description", newServiceWarrantyDescription);
    // formData.append("service_season_spring", newServiceSeasonSpringCheckBox);
    // formData.append("service_season_summer", newServiceSeasonSummerCheckBox);
    // formData.append("service_season_fall", newServiceSeasonFallCheckBox);
    // formData.append("service_season_winter", newServiceSeasonWinterCheckBox);
    formData.append("service_image", service_image);
    formData.append("category_id", category_id);

    axios.post(`${Constants.url.API_ADD_SERVICE}`, formData);
  };

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ')
  // }
  

  const pullData =(dataPulled) => {
    // console.log('first')
    // console.log(dataPulled.category_id)
    // setCategory_id(dataPulled.category_id)
    // setCategoryName(dataPulled.category_name)
  }

  return (
    <>
    {/*  newServiceWarranty, 
    setNewServiceName, setNewServiceDescription, setNewServicePrice,
    setNewServiceWarranty, setNewServiceWarrantyDescription, setCategory_id */}
      {/* <ResponsiveSideNav 
      dashboardContent={
      <NewServiceForm
      addService={addService()}
      setServiceImage={service_image}
      setNewServiceName={newServiceName}
      setNewServiceDescription={newServiceDescription}
      setNewServicePrice={newServicePrice}
      setNewServiceWarranty={newServiceWarranty}
      setNewServiceWarrantyDescription={newServiceWarrantyDescription}
      setCategory_id={category_id}
       />
      } /> */}


      <ResponsiveSideNav dashboardContent={
        <form
        className="space-y-8 divide-y divide-gray-200 container"
        onSubmit={addService}
        method="POST"
         encType='multipart/form-data'
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Add Service Information 
              </h3>
            </div>
  
            <div>
              <label>Upload profile picture</label>
              <input type="file" name="service_image" size='lg' onChange={(e) => setServiceImage(e.target.files[0])} />
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
                    name="newServiceName"
                    id="newServiceName"
                    onChange={(e) => setNewServiceName(e.target.value)}
                    className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                <label
                  htmlFor="newServiceDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add a description for the new service
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    name="newServiceDescription"
                    id="newServiceDescription"
                    onChange={(e) => setNewServiceDescription(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="newServicePrice"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Service Price
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="number"
                    min=".50"
                    max="1000"
                    name="newServicePrice"
                    id="newServicePrice"
                    onChange={(e) => setNewServicePrice(e.target.value)}
                    className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="newServiceWarranty"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Warranty for this service?
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-1">
                  <select
                    id="newServiceWarranty"
                    name="newServiceWarranty"
                    onChange={(e) => setNewServiceWarranty(e.target.value)}
                    className="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>
  
  
  
              {newServiceWarranty === "Yes" ? (
                <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                  <label
                    htmlFor="newServiceWarrantyDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Add a description for the warranty
                  </label>
                  <div className="mt-1">
                    <textarea
                      type="text"
                      name="newServiceWarrantyDescription"
                      id="newServiceWarrantyDescription"
                      onChange={(e) =>
                        setNewServiceWarrantyDescription(e.target.value)
                      }
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
  
              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="newServiceSeason"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  What season is this service available?
                </label>
  
                <div className="mt-1 sm:mt-1 sm:col-span-2">
                  <div className="ml-3 flex items-center h-5">
                    <label
                      htmlFor="newServiceSeasonSpringCheckBox"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 pl-4 pr-1"
                    >
                      Spring
                    </label>
                    <input
                      id="newServiceSeasonSpringCheckBox"
                      name="newServiceSeasonSpringCheckBox"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      value="true"
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setNewServiceSeasonSpringCheckBox("Spring");
                        } else if (e.target.checked !== true) {
                          setNewServiceSeasonSpringCheckBox("");
                        }
                      }}
                    />
                
                    <label
                      htmlFor="newServiceSeasonSummerCheckBox"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 pl-4 pr-1"
                    >
                      Summer
                    </label>
                    <input
                      id="newServiceSeasonSummerCheckBox"
                      name="newServiceSeasonSummerCheckBox"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      value="true"
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setNewServiceSeasonSummerCheckBox("Summer");
                        } else if (e.target.checked !== true) {
                          setNewServiceSeasonSummerCheckBox("");
                        }
                      }}
                    />
                  </div>
  
                  <div className="ml-3 flex items-center h-5 mt-2">
                    <label
                      htmlFor="newServiceSeasonFallCheckBox"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 pl-4 pr-1"
                    >
                      Fall
                    </label>
                    <input
                      id="newServiceSeasonFallCheckBox"
                      name="newServiceSeasonFallCheckBox"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded "
                      value="true"
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setNewServiceSeasonFallCheckBox("Fall ");
                        } else if (e.target.checked !== true) {
                          setNewServiceSeasonFallCheckBox("");
                        }
                      }}
                    />
                  
              
                    <label
                      htmlFor="newServiceSeasonWinterCheckBox"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 pl-4 pr-1"
                    >
                      Winter
                    </label>
                    <input
                      id="newServiceSeasonWinterCheckBox"
                      name="newServiceSeasonWinterCheckBox"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded "
                   
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setNewServiceSeasonWinterCheckBox("Winter");
                        } else if (e.target.checked !== true) {
                          setNewServiceSeasonWinterCheckBox("");
                        }
                      }}
                    />
                  </div>
                </div>
              </div> */}
  
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="category_id"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Assign to category
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-1">
                
                  <select
                    id="Category_id"
                    name="Category_id"
                    onChange={(e) => setCategory_id(e.target.value)}
                    className="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  >
                    {categoryList.map((category) => {
                     return <option key={category.category_id} value={category.category_id}>{category.category_name}{console.log(category.category_name)}</option>
                     
                    })}
                  
                  </select>
                </div>




{/* <CategorySelector  value={selection}  /> */}
{/* <CategorySelector  dataPush={pullData} /> */}









              </div>
  
  
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
              // onClick={addService}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
  
            <div></div>
          </div>
        </div>
      </form>
      } />
    </>
  );
}

export default AdminAddServicePage
