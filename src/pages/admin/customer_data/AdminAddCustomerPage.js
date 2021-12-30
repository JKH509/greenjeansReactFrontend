import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
uuidv4();



const AdminAddCustomerPage = () => {


  useEffect(() => {
   
     }, [])// eslint-disable-line react-hooks/exhaustive-deps


  const onClickAddCustomer =(e) => {
    e.preventDefault();
    async function addCustomer() {
      const request = await axios.post('http://localhost:5001/api/customer/add-customer')
      // setCustomers(request.data)
      console.log(request)
      return request;
    }
    addCustomer()
  }

  const addCustomer = () => {
    axios.post('http://localhost:5001/api/customer/add-customer', {
      customerFirstName: customerFirstName, 
      customerLastName: customerLastName, 
      customerEmail: customerEmail, 
      customerAddress: customerAddress, 
      customerCity: customerCity, 
      customerState: customerState, 
      customerZip: customerZip, 
      customerStart: customerStarted, 
      customerEnd: customerEnd, 
      customerComplaints: customerComplaints, 
      customerService: customerService, 
      customerTurfSqft: customerTurfSqft, 
      customerWeeklyExpense: customerWeeklyExpense, 
      customerSeasonalExpense: customerSeasonalExpense, 
      customerOneTimeServiceExpense: customerOneTimeServiceExpense, 
      customerDistance: customerDistance, 
      customerNotes: customerNotes, 
      customerPriority: customerPriority, 
      customerBillingAddress: customerBillingAddress, 
      customerBillingCity: customerBillingCity, 
      customerBillingState: customerBillingState, 
      customerBillingZip: customerBillingZip, 
      customerPaymentType: customerPaymentType, 
    })
  }


  




  // const addCustomer = () => {
  //   axios.post('http://localhost:5001/api/customer/add-customer', (req, res) => {
      
  //   })
  // }

  // const [ uniqueIdentifier, setUniqueIdentifier ] = useState(uuidv4())
  const [ customerFirstName ,setCustomerFirstName ] = useState('')
  const [ customerLastName ,setCustomerLastName ] = useState('')
  const [ customerPhone ,setCustomerPhone ] = useState('')
  const [ customerMobile ,setCustomerMobile ] = useState('')
  const [ customerEmail , setCustomerEmail ] = useState('')
  const [ customerAddress , setCustomerAddress ] = useState('')
  const [ customerCity , setCustomerCity ] = useState('')
  const [ customerState , setCustomerState ] = useState('')
  const [ customerZip , setCustomerZip ] = useState('')
  const [ customerCountry , setCustomerCountry ] = useState('')
  const [ customerStarted , setCustomerStarted] = useState('')
  const [ customerEnd , setCustomerEnd ] = useState('')
  const [ customerComplaints , setCustomerComplaints ] = useState('')
  const [ customerService , setCustomerService ] = useState('')
  const [ customerTurfSqft , setCustomerTurfSqft ] = useState('')
  const [ customerWeeklyExpense , setCustomerWeeklyExpense ] = useState('')
  const [ customerSeasonalExpense , setCustomerSeasonalExpense ] = useState('')
  const [ customerOneTimeServiceExpense , setCustomerOneTimeServiceExpense ] = useState('')
  const [ customerDistance , setCustomerDistance ] = useState('')
  const [ customerNotes , setCustomerNotes ] = useState('')
  const [ customerPriority , setCustomerPriority ] = useState('')
  const [ customerBillingAddress , setCustomerBillingAddress ] = useState('')
  const [ customerBillingCity , setCustomerBillingCity ] = useState('')
  const [ customerBillingState , setCustomerBillingState ] = useState('')
  const [ customerBillingCountry , setCustomerBillingCountry ] = useState('')
  const [ customerBillingZip , setCustomerBillingZip ] = useState('')
  const [ customerPaymentDueDate , setCustomerPaymentDueDate ] = useState('')
  const [ customerPaymentDate , setCustomerPaymentDate ] = useState('')
  const [ customerPaymentType , setCustomerPaymentType ] = useState('')
  // console.log(customerFirstName)

  return (
    <div className="container">
      <form className="space-y-8 divide-y divide-gray-200 ">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Customer Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>

            <div className="flex items-center h-5">
              Check if Information is NOT the same for billing ?{" "}
              <input
                id="offers"
                name="offers"
                type="checkbox"
                className=" text-blue-600 border-gray-300 rounded ml-2"
              />
            </div>

            <div >
              {/* <input type='hidden' id="uniqueIdentifier" name="uniqueIdentifier" value={uniqueIdentifier} /> */}
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

              <div className="sm:col-span-2">
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

              <div className="sm:col-span-2">
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
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <legend className="text-base font-medium text-gray-900">
                  By Email
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Billing
                      </label>
                      <p className="text-gray-500">
                        Get notified when your bill is ready.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Promotions
                      </label>
                      <p className="text-gray-500">
                        Get notified when we have discounts.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Push Notifications
                  </legend>
                  <p className="text-sm text-gray-500">
                    These are delivered via SMS to your mobile phone.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-email"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  workcation.com/
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 focus:ring-blue-500 focus:border-blue-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700"
              >
                Cover photo
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
              onClick={addCustomer}
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
