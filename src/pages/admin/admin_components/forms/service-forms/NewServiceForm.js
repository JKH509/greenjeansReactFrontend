import React from 'react'

export const NewServiceForm = (


  {
    addService, setServiceImage, newServiceWarranty, 
    setNewServiceName, setNewServiceDescription, setNewServicePrice,
    setNewServiceWarranty, setNewServiceWarrantyDescription, setCategory_id
  }) => {

    // const addService = async (e) => {
    //   e.preventDefault();
  
    //   const formData = new FormData();
    //   formData.append("service_type", newServiceName);
    //   formData.append("service_description", newServiceDescription);
    //   formData.append("service_price", newServicePrice);
    //   formData.append("service_warranty", newServiceWarranty);
    //   formData.append("warranty_description", newServiceWarrantyDescription);
    //   // formData.append("service_season_spring", newServiceSeasonSpringCheckBox);
    //   // formData.append("service_season_summer", newServiceSeasonSummerCheckBox);
    //   // formData.append("service_season_fall", newServiceSeasonFallCheckBox);
    //   // formData.append("service_season_winter", newServiceSeasonWinterCheckBox);
    //   formData.append("service_image", service_image);
    //   formData.append("category_id", category_id);
  
    //   axios.post(`${Constants.url.API_ADD_SERVICE}`, formData);
    // };



    
  return (
    // <CategoryContext.Provider value={{ categoryState, setCategoryState }}>
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
            {/* <input type="file" name="service_image" size='lg' onChange={(e) => ServiceImage(e.target.files[0])} /> */}
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
                  // onChange={(e) => NewServiceName(e.target.value)}
                  onChange={setNewServiceName}
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
                  // onChange={(e) => NewServiceDescription(e.target.value)}
                  onChange={setNewServiceDescription}
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
                  min="1"
                  name="newServicePrice"
                  id="newServicePrice"
                  onChange={setNewServicePrice}
                  // onChange={(e) => setNewServicePrice(Number(e.target.value))}
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
                  onChange={setNewServiceWarranty}
                  // onChange={(e) => setNewServiceWarranty(e.target.value)}
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
                    onChange={
                      setNewServiceWarrantyDescription
                      // setNewServiceWarrantyDescription(e.target.value)
                    }
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ) : (
              ""
            )}

           

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="Category_id"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Category ID?
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-1">
                <select
                  id="Category_id"
                  name="Category_id"
                  // onChange={(e) => setCategory_id(e.target.value)}
                  onChange={setCategory_id}
                  className="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="1">Lawn</option>
                  <option value="2">Snow</option>
                  <option value="3">Shrubs and Flowers</option>
                  <option value="4">Sprinklers</option>
                </select>
              </div>
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
    // </CategoryContext.Provider>
  )
}
