import React,{ useState } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Constants } from '../../../utilities/Constants'
import { useNavigate } from 'react-router';

uuidv4();



const AdminAddCustomerPage = () => {
  let navigate = useNavigate();

  const addCustomer = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("uuid", uuid);
    formData.append("first_name", customerFirstName);
    formData.append("last_name", customerLastName);
    formData.append("email", customerEmail);
    formData.append("phone_number", customerPhone);
    formData.append("mobile_phone", customerMobile);
    formData.append("preferred_priority", customerPriority);
    formData.append("street_address", customerAddress);
    formData.append("address_two", customerAddressTwo);
    formData.append("city", customerCity);
    formData.append("state", customerState);
    formData.append("postal_code", customerZip);
    formData.append("country", customerCountry);
    formData.append("street_billing_address", customerBillingAddress);
    formData.append("street_billing_address_two", customerBillingAddressTwo);
    formData.append("billing_city", customerBillingCity);
    formData.append("billing_state", customerBillingState);
    formData.append("billing_postal_code", customerBillingZip);
    formData.append("distance_fo", customerDistance);
    formData.append("notes", customerNotes);
    formData.append("property_image", property_image);
    formData.append("preferred_payment_method", customerPaymentType);
    
    axios.post(`${Constants.url.API_ADD_CUSTOMER}`, formData)
    navigate("/admin/customers");
  };


  const [ uuid ] = useState(uuidv4())
  const [ customerFirstName ,setCustomerFirstName ] = useState('')
  const [ customerLastName ,setCustomerLastName ] = useState('')
  const [ customerEmail , setCustomerEmail ] = useState('')
  // const [ customerDow , setCustomerDow ] = useState('')
  const [ customerPhone ,setCustomerPhone ] = useState('')
  const [ customerMobile ,setCustomerMobile ] = useState('')

  const [ customerAddress , setCustomerAddress ] = useState('')
  const [ customerAddressTwo , setCustomerAddressTwo ] = useState('')
  const [ customerCity , setCustomerCity ] = useState('')
  const [ customerState , setCustomerState ] = useState('')
  const [ customerZip , setCustomerZip ] = useState('')
  const [ customerCountry , setCustomerCountry ] = useState('United States')
  const [ customerBillingAddress , setCustomerBillingAddress ] = useState('')
  const [ customerBillingAddressTwo , setCustomerBillingAddressTwo ] = useState('')
  const [ customerBillingCity , setCustomerBillingCity ] = useState('')
  const [ customerBillingState , setCustomerBillingState ] = useState('')
  const [ customerBillingZip , setCustomerBillingZip ] = useState('')
  const [  , setCustomerBillingCountry ] = useState('United States')
  const [ customerDistance , setCustomerDistance ] = useState('')
  const [ customerNotes , setCustomerNotes ] = useState('')
  const [ customerPriority , setCustomerPriority ] = useState('Tuesday')
  const [ customerPaymentType , setCustomerPaymentType ] = useState('Visa')
  const [ billingCheckbox, setBillingCheckbox ] = useState(false)
   const [ property_image , setProperty_image] = useState('')

 const fillBilling  = () => {
    setCustomerBillingAddress(customerAddress);
    setCustomerBillingAddressTwo(customerAddressTwo);
    setCustomerBillingCity(customerCity);
    setCustomerBillingState(customerState);
    setCustomerBillingZip(customerZip);
  }
 

  return (
    
    <div className="container">
      {/* <form className="space-y-8 divide-y divide-gray-200 "> */}
      <form
      className="space-y-8 divide-y divide-gray-200 container"
      onSubmit={addCustomer}
      method="POST"
      // action="/profile-upload-single"
       encType='multipart/form-data'
    >

        <div className="space-y-8 divide-y divide-gray-200 ">
          <div className="pt-8">
            <input type="hidden" value={uuid} />
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Customer Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>

            <div className="flex items-center h-5">
              Check if Information is the same for billing ?{" "}
              <input
                id="billingCheckbox"
                name="billingCheckbox"
                type="checkbox"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded ml-2"
                // value="true"
                onChange={(e) => {
                  if(e.target.checked)
                  {
                    setBillingCheckbox(true)
                    fillBilling();
                      } else {
                    setBillingCheckbox(false)
                      }
                    }
                    }  value="true"  />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="customerFirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerFirstName"
                    id="customerFirstName"
                    autoComplete="given-name"
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="customerLastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerLastName"
                    id="customerLastName"
                    autoComplete="family-name"
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="customerEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="customerEmail"
                    name="customerEmail"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="customerPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone #
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="customerPhone"
                    id="customerPhone"
                    autoComplete="tel"
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="customerMobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Phone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="customerMobile"
                    id="customerMobile"
                    autoComplete="tel"
                    onChange={(e) => setCustomerMobile(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="customerAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerAddress"
                    id="customerAddress"
                    autoComplete="street-address"
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="customerCity"
                  className="block text-sm font-medium text-gray-700"
                >
                  address two
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerCity"
                    id="customerCity"
                    autoComplete="address-level2"
                    onChange={(e) => setCustomerAddressTwo(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="customerCity"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerCity"
                    id="customerCity"
                    autoComplete="address-level2"
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="customerState"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerState"
                    id="customerState"
                    autoComplete="address-level1"
                    onChange={(e) => setCustomerState(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="customerZip"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerZip"
                    id="customerZip"
                    autoComplete="postal-code"
                    onChange={(e) => setCustomerZip(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="customerCountry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="customerCountry"
                    name="customerCountry"
                    autoComplete="country-name"
                    onChange={(e) => setCustomerCountry(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              {billingCheckbox !== true ? (
                <>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="customerBillingAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Billing Street address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="customerBillingAddress"
                        id="customerBillingAddress"
                        autoComplete="street-address"
                        value={customerBillingAddress}
                        onChange={(e) => setCustomerBillingAddress(e.target.value) }
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="customerBillingCity"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Billing City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="customerBillingCity"
                        id="customerBillingCity"
                        autoComplete="address-level2"
                        value={customerCity}
                        onChange={(e) => setCustomerBillingCity(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="customerBillingState"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="customerBillingState"
                        id="customerBillingState"
                        autoComplete="address-level1"
                        value={customerBillingState}
                        onChange={(e) =>
                          setCustomerBillingState(e.target.value)
                        }
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="customerBillingZip"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Billing ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="customerBillingZip"
                        id="customerBillingZip"
                        autoComplete="postal-code"
                        value={customerBillingZip}
                        onChange={(e) => setCustomerBillingZip(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="customerCountry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="customerCountry"
                        name="customerCountry"
                        autoComplete="country-name"
                        onChange={(e) => setCustomerBillingCountry(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                ""
               )} 

            
              <div className="sm:col-span-1">
                <label
                  htmlFor="customerDistance"
                  className="block text-sm font-medium text-gray-700"
                >
                  customerDistance
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customerDistance"
                    id="customerDistance"
                    onChange={(e) => setCustomerDistance(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
 
              <div className="sm:col-span-1">
                <label
                  htmlFor="customerPriority"
                  className="block text-sm font-medium text-gray-700"
                >
                  Customer Priority
                </label>
                <div className="mt-1">
                  <select
                    id="customerPriority"
                    name="customerPriority"
                    onChange={(e) => setCustomerPriority(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </select>
                </div>
              </div>


              <div className="sm:col-span-1">
                <label
                  htmlFor="customerPaymentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Payment Type
                </label>
                <div className="mt-1">
                  <select
                    id="customerPaymentType"
                    name="customerPaymentType"
                   
                    onChange={(e) => setCustomerPaymentType(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Visa</option>
                    <option>Mastercard</option>
                    <option>Check</option>
                  </select>
                </div>
              </div>
       

              <div className="sm:col-span-3">
                <label
                  htmlFor="customerNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  customerNotes
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    name="customerNotes"
                    id="customerNotes"
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>


              
             </div>


          </div>



        </div>

        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                {/* <input type="file" name="service_image" size='lg' onChange={(e) => setProperty_image(e.target.files[0])} /> */}
                  {/* <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg> */}
                </span>
                <input type="file" name="service_image" size='lg' onChange={(e) => setProperty_image(e.target.files[0])}  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  />
                {/* <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Change
                </button> */}
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700"
              >
                Property photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                      
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
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
              // onClick={addCustomer}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminAddCustomerPage
