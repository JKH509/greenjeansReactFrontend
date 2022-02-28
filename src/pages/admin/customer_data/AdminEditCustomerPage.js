import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'
import { Constants } from '../../../utilities/Constants'

const AdminEditCustomerPage = () => {
const {customer_id} = useParams();

  const [ customerFirstName ,setCustomerFirstName ] = useState('')
  const [ customerLastName ,setCustomerLastName ] = useState('')
  const [ customerEmail , setCustomerEmail ] = useState('')
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
  // const [ customerBillingCountry , setCustomerBillingCountry ] = useState('United States')
  const [ customerDistance , setCustomerDistance ] = useState('')
  const [ customerNotes , setCustomerNotes ] = useState('')
  const [ customerPriority , setCustomerPriority ] = useState('Tuesday')
  const [ customerPaymentType , setCustomerPaymentType ] = useState('Visa')
  const [ billingCheckbox, setBillingCheckbox ] = useState(false)



useEffect(() => {
  const getDataById = async () => {
    
    const {data} = await axios.get(`${Constants.url.API_GET_CUSTOMER_BY_ID}/${customer_id}`)
    // console.log(data)

    setCustomerFirstName(data.first_name)
    setCustomerLastName(data.last_name)
    setCustomerEmail(data.email)
    setCustomerPhone(data.phone_number)
    setCustomerMobile(data.mobile_phone)
    setCustomerPriority(data.preferred_priority)
    setCustomerAddress(data.street_address)
    setCustomerAddressTwo(data.address_two)
    setCustomerCity(data.city)
    setCustomerState(data.state)
    setCustomerZip(data.postal_code)
    setCustomerCountry(data.country)
    setCustomerBillingAddress(data.street_billing_address)
    setCustomerBillingAddressTwo(data.street_billing_address_two)
    setCustomerBillingCity(data.billing_city)
    setCustomerBillingState(data.billing_state)
    setCustomerBillingZip(data.billing_postal_code)
    setCustomerDistance(data.distance_fo)
    setCustomerNotes(data.notes)
    setCustomerPaymentType(data.preferred_payment_method)
}
getDataById()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])



const updateHandler = async (e) => {

  e.preventDefault()
//   // update by put request
  const data = {
    first_name: customerFirstName,
    last_name: customerLastName,
    email: customerEmail,
    phone_number: customerPhone,
    mobile_phone: customerMobile,
    street_address: customerAddress,
    address_two: customerAddressTwo,
    city: customerCity,
    state: customerState,
    postal_code: customerZip,
    country: customerCountry,
    street_billing_address: customerBillingAddress,
    street_billing_address_two: customerBillingAddressTwo,
    billing_city: customerBillingCity,
    billing_state: customerBillingState,
    billing_postal_code: customerBillingZip,
    distance_for: customerDistance,
    notes: customerNotes,
    preferred_payment_method: customerPaymentType,
  };
  
  await axios.put(`${Constants.url.API_EDIT_CUSTOMER_BY_ID}/${customer_id}`, data)
  // history.push('/services')
}


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
      onSubmit={updateHandler}
      method="POST"
     
    >
        <div className="space-y-8 divide-y divide-gray-200 ">
          <div className="pt-8">
            {/* <input type="hidden" value={uuid} /> */}
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
                    value={customerFirstName}
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
                    value={customerLastName}
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
                    value={customerEmail}
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
                    value={customerPhone}
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
                    value={customerMobile}
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
                    value={customerAddress}
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
                    value={customerAddressTwo}
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
                    value={customerCity}
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
                    value={customerState}
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
                    value={customerZip}
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
                    value={customerCountry}
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
                    value={customerDistance}
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
                    value={customerPriority}
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
                    value={customerPaymentType}
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
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
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
  )
}

export default AdminEditCustomerPage
