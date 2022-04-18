import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { Constants } from '../../utilities/Constants'
import { useNavigate } from 'react-router';
import BackButtons from '../buttons/BackButtons';

const WorkOrderForm = () => {

  const { customer_id } = useParams();

  const [ jobServiceSelected, setJobServiceSelected ] = useState('')
  const [ jobServiceList, setJobServiceList ] = useState('')
  const [ customerExist, setCustomerExist ] = useState('')
  const [ jobServiceID, setJobServiceID ] = useState(0)


 
  useEffect(() => {
  
    const fetchData = async () => {
      const controller = new AbortController()

     if(jobServiceID !== 0 && jobServiceID !== ""){
      const serviceSelected = await axios(
        `http://localhost:5001/api/service/${jobServiceID}`
      );
      setJobServiceSelected(serviceSelected.data)
     }
      const serviceList = await axios(
        'http://localhost:5001/api/services/list'
      );
      const customerById = await axios(
        `http://localhost:5001/api/customer/${customer_id}`
      );

      setJobServiceList(serviceList.data)
      setCustomerExist(customerById.data)

      return () => {
        controller.abort()
      }
    };
    fetchData()
     }, [jobServiceID])// eslint-disable-line react-hooks/exhaustive-deps

   

  let navigate = useNavigate();

  const [ jobPropertyName, setJobPropertyName ] = useState('')
  const [ jobContactFirstName, setJobContactFirstName ] = useState('')
  const [ jobContactLastName, setJobContactLastName ] = useState('')
  const [ jobContactPhone, setJobContactPhone ] = useState('')
  const [ jobInterval, setJobInterval ] = useState('')
  const [ jobDayPriority, setJobDayPriority ] = useState('')
  const [ jobAddress, setJobAddress ] = useState('')
  const [ jobCity, setJobCity ] = useState('')
  const [ jobState, setJobState ] = useState('')
  const [ jobZip, setJobZip ] = useState('')
  const [ jobCount, setJobCount ] = useState(0)
  // const [ jobPrice, setJobPrice ] = useState(0.0)
  // let jobPrice = 0
  const [ jobDistance, setJobDistance ] = useState(0.0)
  const [ jobCrew, setJobCrew ] = useState(0)
  const [ jobStart, setJobStart ] = useState(null)
  const [ jobEnd, setJobEnd ] = useState(null)
  const [ jobStatus, setJobStatus ] = useState(1)
  const [ jobImage, setJobImage ] = useState('')
  // const [ jobCustomerID, setJobCustomerID ] = useState(0)
  const [ jobNotes, setJobNotes ] = useState('')
  const [ jobContactEmail, setJobContactEmail ] = useState('')
  const [ jobCheckbox, setJobCheckbox ] = useState(false)


   let jobPrice =  (jobServiceSelected.service_price * jobCount / 1000) + 35
  
    // console.log(jobPrice)




  const existingInfo = () => {
    setJobContactFirstName(customerExist.first_name);
    setJobContactLastName(customerExist.last_name);
    setJobContactPhone(customerExist.mobile_phone);
    setJobContactEmail(customerExist.email);
    setJobAddress(customerExist.street_address);
    setJobCity(customerExist.city);
    setJobState(customerExist.state);
    setJobZip(customerExist.postal_code);
  }


  const addWorkOrder = async (e) => {
    e.preventDefault();

    // let formData = {
    // job_property_name: "residential",
    //     job_contact_first_name : "James",
    //     job_contact_last_name : "H",
    //     job_email :"test@gmail.com",
    //     job_contact_phone :"509 821-0635",
    //     job_interval : 14,
    //     job_day_priority : "Wednesday",
    //     job_address: "8728",
    //     job_city : "Spokane",
    //     job_state : "WA",
    //     job_postal_code : "99218",
    //     job_notes : "Nothing",
    //     job_count : 10000,
    //     job_price : 2,
    //     job_distance_from_homebase : 34.00,
    //     job_crew_id_assigned : 1,
    //     job_time_start : "" ,
    //     job_time_stop : "",
    //     job_status : 1,
    //     job_image : "",
    //     customer_id : 1,
    //     service_id : 1,
    // }

    let formData = {
      job_property_name: jobPropertyName,
          job_contact_first_name : jobContactFirstName,
          job_contact_last_name : jobContactLastName,
          job_email :jobContactEmail,
          job_contact_phone : jobContactPhone,
          job_interval : jobInterval,
          job_day_priority : jobDayPriority,
          job_address: jobAddress,
          job_city : jobCity,
          job_state : jobState,
          job_postal_code : jobZip,
          job_notes : jobNotes,
          job_count : jobCount,
          job_price : jobPrice,
          job_distance_from_homebase : jobDistance,
          job_crew_id_assigned : 1,
          job_time_start : "" ,
          job_time_stop : "",
          job_status : jobStatus,
          job_image : "",
          customer_id : customer_id,
          service_id : jobServiceID,
      }


    // const formData = new FormData();
    // formData.append("job_property_name", jobPropertyName);
    // formData.append("job_contact_first_name", jobContactFirstName);
    // formData.append("job_contact_last_name", jobContactLastName);
    // formData.append("job_contact_email", jobContactEmail);
    // formData.append("job_contact_phone", jobContactPhone);
    // formData.append("job_interval", jobInterval);
    // formData.append("job_day_priority", jobDayPriority);
    // formData.append("job_address", jobAddress);
    // formData.append("job_city", jobCity);
    // formData.append("job_state", jobState);
    // formData.append("job_postal_code", jobZip);
    // formData.append("job_notes", jobNotes);
    // formData.append("job_count", jobCount);
    // formData.append("job_price", 80);
    // formData.append("job_distance_from_homebase", jobDistance);
    // formData.append("job_crew_id_assigned", jobCrew);
    // formData.append("job_time_start", jobStart);
    // formData.append("job_time_stop", jobEnd);
    // formData.append("job_status", jobStatus);
    // formData.append("job_image", jobImage);
    // // formData.append("property_image", jobImage);
    // formData.append("customer_id", jobCustomerID);
    // formData.append("service_id", jobServiceID);
    
    // formData.append("preferred_payment_method", customerPaymentType);
    axios.post('http://localhost:5001/api/workOrder/create-new-work-order', formData)
    // axios.post(`${Constants.url}/add-work-order`, formData)
    navigate("/admin/customers");
  };



//  console.log(jobContactFirstName)
//  console.log(jobContactLastName)
//  console.log(jobContactPhone)
//  console.log(jobContactEmail)
// console.log(customerExist.street_address);
// console.log(customerExist.city);
// console.log(customerExist.state);
// console.log(customerExist.postal_code);



  return (
    <div className="container">
      <form
        className="space-y-8 divide-y divide-gray-200 container"
        onSubmit={addWorkOrder}
        method="POST"
        // action="/profile-upload-single"
        encType="multipart/form-data"
      >
        <div className="space-y-8 divide-y divide-gray-200 ">
          <div className="pt-8">
            {/* <input type="hidden" value={uuid} /> */}
            {/* <input type="hidden" value="" /> */}
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Job Information
              </h3>
            </div>

          

            <label>Customers info is the same </label>
            <input
              id="customerInfo"
              name="customerInfo"
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              value="true"
              onChange={(e) => {
                if (e.target.checked === true) {
                  setJobCheckbox(true)
                  existingInfo();
                } else if (e.target.checked !== true) {
                  setJobCheckbox(false)
                  setJobContactFirstName('');
    setJobContactLastName('');
    setJobContactPhone('');
    setJobContactEmail('');
    setJobAddress('');
    setJobCity('');
    setJobState('');
    setJobZip('');
                }
              }}
            />

{/* <input
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
                    }  value="true"  /> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="jobPropertyName"
                className="block text-sm font-medium text-gray-700"
              >
                Property Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="jobPropertyName"
                  id="jobPropertyName"
                  placeholder="Enter unique name here or enter Residential/Commercial"
                  onChange={(e) => setJobPropertyName(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* {jobCheckbox !== true ? ( */}


             
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

            {jobCheckbox !== true ? 
            
             <>

              <div className="sm:col-span-3">
                <label
                  htmlFor="jobContactFirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Contact First Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobContactFirstName"
                    id="jobContactFirstName"
                    defaultValue={jobContactFirstName}
                    autoComplete="given-name"
                    onChange={(e) => setJobContactFirstName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="jobContactFirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Contact Last Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobContactLastName"
                    id="jobContactLastName"
                    autoComplete="family-name"
                    defaultValue={jobContactLastName}
                    onChange={(e) => setJobContactLastName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-5">
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
                    defaultValue={jobContactEmail}
                    autoComplete="email"
                    onChange={(e) => setJobContactEmail(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="jobContactPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone #
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="jobContactPhone"
                    id="jobContactPhone"
                    defaultValue={jobContactPhone}
                    autoComplete="tel"
                    onChange={(e) => setJobContactPhone(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="jobAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobAddress"
                    id="jobAddress"
                    defaultValue={jobAddress}
                    autoComplete="street-address"
                    onChange={(e) => setJobAddress(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="jobCity"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobCity"
                    id="jobCity"
                    defaultValue={jobCity}
                    onChange={(e) => setJobCity(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="jobState"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobState"
                    id="jobState"
                    defaultValue={jobState}
                    onChange={(e) => setJobState(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="jobZip"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobZip"
                    id="jobZip"
                    defaultValue={jobZip}
                    autoComplete="postal-code"
                    onChange={(e) => setJobZip(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>


</>
 :""}

        

              <div className="sm:col-span-2">
                <label
                  htmlFor="jobServiceID"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service {jobServiceID}
                </label>
                <div className="mt-1">
                  <select
                    id="jobServiceID"
                    name="jobServiceID"
                    onChange={(e) => setJobServiceID(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option defaultValue="">Select a service</option>

                    {jobServiceList &&
                      jobServiceList.map((service) => {
                        return (
                          <option key={service.service_id} value={service.service_id}>
                            {service.service_type}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="jobInterval"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Interval
                </label>
                <div className="mt-1">
                  <select
                    id="jobInterval"
                    name="jobInterval"
                    onChange={(e) => setJobInterval(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="0">One-time job</option>
                    <option value="10">Every 10 days</option>
                    <option value="14">Every 2 weeks</option>
                    <option value="30">Every 30 days</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="jobDayPriority"
                  className="block text-sm font-medium text-gray-700"
                >
                  Priority day
                </label>
                <div className="mt-1">
                  <select
                    id="customerPriority"
                    name="customerPriority"
                    onChange={(e) => setJobDayPriority(e.target.value)}
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

              <div className="sm:col-span-2">
                <label
                  htmlFor="jobCount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Count/Size
                </label>

                <div className="mt-1">
                  <input
                    type="number"
                    name="jobCount"
                    id="jobCount"
                    placeholder="ex turf: 10,500 or shrubs 10"
                    onChange={(e) => setJobCount(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="jobPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>

                <div className="mt-1">
                  <input
                  readOnly
                    type="number"
                    name="jobPrice"
                    id="jobPrice"
                    //  value={Number(jobPrice)}
                     value={jobPrice}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="jobDistance"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job distance
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobDistance"
                    id="jobDistance"
                    onChange={(e) => setJobDistance(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="jobPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crew Assign
                </label>
                <div className="mt-1">
                  <select
                    id="jobCrew"
                    name="jobCrew"
                    onChange={(e) => setJobCrew(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="1">North Crew</option>
                    <option value="2">East Crew</option>
                    <option value="3">South Crew</option>
                    <option value="4">West Crew</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-5">
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
                    onChange={(e) => setJobNotes(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="customerNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Customer Approval Status
                </label>
                <div className="mt-1">
                  <label>Aproved </label>
                  <input
                    id="jobStatus"
                    name="jobStatus"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    value="true"
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        setJobStatus(2);
                      } else if (e.target.checked !== true) {
                        setJobStatus(0);
                      }
                    }}
                  />
                  <br />

                  <label>Rejected </label>
                  <input
                    id="jobStatus"
                    name="jobStatus"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    value="true"
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        setJobStatus(3);
                      } else if (e.target.checked !== true) {
                        setJobStatus(1);
                      }
                    }}
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
                {/* <input
                  type="file"
                  name="service_image"
                  size="lg"
                  onChange={(e) => setProperty_image(e.target.files[0])}
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                /> */}
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
            <BackButtons />
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

export default WorkOrderForm