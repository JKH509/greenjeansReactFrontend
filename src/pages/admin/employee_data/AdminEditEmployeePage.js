import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { Constants } from '../../../utilities/Constants'


const AdminEditEmployeePage = () => {
  const { employee_id } = useParams();
  // const [employee, setEmployee] = useState('')

  const [ employeeFirstName ,setEmployeeFirstName ] = useState('')
  const [ employeeLastName ,setEmployeeLastName ] = useState('')
  const [ employeePhone ,setEmployeePhone ] = useState('')
  const [ employeeMobile ,setEmployeeMobile ] = useState('')
  const [ employeeGender ,setEmployeeGender ] = useState('')
  const [ employeeJobTitle ,setEmployeeJobTitle ] = useState('')
  
  const [ employeeStartingWage ,setEmployeeStartingWage ] = useState('')
  const [ employeeLastWage ,setEmployeeLastWage ] = useState('')
  const [ employeeEmail , setEmployeeEmail ] = useState('')
  const [ employeeAddress , setEmployeeAddress ] = useState('')
  const [ employeeAddressTwo , setEmployeeAddressTwo ] = useState('')
  const [ employeeCity , setEmployeeCity ] = useState('')
  const [ employeeState , setEmployeeState ] = useState('')
  const [ employeeZip , setEmployeeZip ] = useState('')
  const [ employeeDistance , setEmployeeDistance ] = useState('')

  const [ employeeCountry , setEmployeeCountry ] = useState('')
  const [ employeeEthnicity , setEmployeeEthnicity ] = useState('')
  const [ employeeDriversLicenseStatus , setEmployeeDriversLicenseStatus ] = useState('')
  const [ employeeMedicalConditions , setEmployeeMedicalConditions ] = useState('')
  const [ employeeCautions , setEmployeeCautions ] = useState('')
  // const [ employee_image , setEmployee_image ] = useState('')
  const [ employeePayPreference, setEmployeePayPreference ] = useState('')



  useEffect(() => {
    const getDataById = async () => {
      const {data} = await axios.get(`${Constants.url.API_EMPLOYEE_BY_ID}/${employee_id}`)
      console.log(data)

      setEmployeeFirstName(data.first_name)
      setEmployeeLastName(data.last_name)
      setEmployeeEmail(data.email)
      setEmployeePhone(data.phone_number)
      setEmployeeMobile(data.mobile_phone)
      setEmployeeAddress(data.street_address)
      setEmployeeAddressTwo(data.address_two)
      setEmployeeCity(data.city)
      setEmployeeState(data.state)
      setEmployeeZip(data.postal_code)
      setEmployeeCountry(data.country)
      setEmployeeDistance(data.distance_fo)
      setEmployeeJobTitle(data.job_title)
      setEmployeeStartingWage(data.starting_wage)
      setEmployeeLastWage(data.ending_wage)
      setEmployeeGender(data.gender)
      setEmployeeEthnicity(data.ethnicity)
      setEmployeeDriversLicenseStatus(data.license_status)
      setEmployeeMedicalConditions(data.med_conditions)
      setEmployeeCautions(data.notes)
      setEmployeePayPreference(data.preferred_payment_method)
  }
  getDataById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

 


  const updateHandler = async (e) => {

    e.preventDefault()
    // update by put request
    const data = {
      first_name: employeeFirstName , 
      last_name: employeeLastName,
      email: employeeEmail,
      phone_number: employeePhone, 
      mobile_phone: employeeMobile, 
      street_address: employeeAddress, 
      address_two: employeeAddressTwo, 
        city: employeeCity, 
        state: employeeState, 
        postal_code: employeeZip, 
        country: employeeCountry, 
        distance_for: employeeDistance, 
        job_title: employeeJobTitle, 
        starting_wage: employeeStartingWage, 
        ending_wage: employeeLastWage, 
        gender: employeeGender, 
        ethnicity: employeeEthnicity, 
        license_status: employeeDriversLicenseStatus, 
        med_conditions: employeeMedicalConditions, 
        notes: employeeCautions, 
        preferred_payment_method: employeePayPreference, 
    }
  
    await axios.put(`${Constants.url.API_EDIT_EMPLOYEE_BY_ID}/${employee_id}`, data)
    // history.push('/services')
  }






  return (
    <div className="container">
      <form
        className="space-y-8 divide-y divide-gray-200 container"
        onSubmit={updateHandler}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Empoyee Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="employeeFirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeFirstName"
                    id="employeeFirstName"
                    value={employeeFirstName}
                    autoComplete="given-name"
                    onChange={(e) => setEmployeeFirstName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="employeeLastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeLastName"
                    id="employeeLastName"
                    value={employeeLastName}
                    autoComplete="family-name"
                    onChange={(e) => setEmployeeLastName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="employeeEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="employeeEmail"
                    name="employeeEmail"
                    type="email"
                    value={employeeEmail}
                    autoComplete="email"
                    onChange={(e) => setEmployeeEmail(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeePhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone #
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="employeePhone"
                    id="employeePhone"
                    value={employeePhone}
                    autoComplete="tel"
                    onChange={(e) => setEmployeePhone(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeMobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Phone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="employeeMobile"
                    id="employeeMobile"
                    autoComplete="tel"
                    value={employeeMobile}
                    onChange={(e) => setEmployeeMobile(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeEmployeeGender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
       
                <div className="mt-1">
                    <select
                    name="employeeGender"
                    id="employeeGender"
                    value={employeeGender}
                    onChange={(e) => setEmployeeGender(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="employeeAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeAddress"
                    id="employeeAddress"
                    value={employeeAddress}
                    autoComplete="street-address"
                    onChange={(e) => setEmployeeAddress(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="employeeCity"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeCity"
                    id="employeeCity"
                    value={employeeCity}
                    autoComplete="city"
                    onChange={(e) => setEmployeeCity(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="employeeState"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeState"
                    id="employeeState"
                    value={employeeState}
                    autoComplete="address-level1"
                    onChange={(e) => setEmployeeState(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeZip"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeZip"
                    id="employeeZip"
                    autoComplete="postal-code"
                    value={employeeZip}
                    onChange={(e) => setEmployeeZip(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeCountry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="employeeCountry"
                    name="employeeCountry"
                    autoComplete="country-name"
                    value={employeeCountry}
                    onChange={(e) => setEmployeeCountry(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeMedicalConditions"
                  className="block text-sm font-medium text-gray-700"
                >
                  Medical Conditions
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeMedicalConditions"
                    id="employeeMedicalConditions"
                    value={employeeMedicalConditions}
                    onChange={(e) =>
                      setEmployeeMedicalConditions(e.target.value)
                    }
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeDriversLicenseStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                  License Status
                </label>
                <div className="mt-1">
                  <select
                    name="employeeDriversLicenseStatus"
                    id="employeeDriversLicenseStatus"
                    value={employeeDriversLicenseStatus}
                    onChange={(e) =>
                      setEmployeeDriversLicenseStatus(e.target.value)
                    }
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>valid</option>
                    <option>not-valid</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeLastWage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Wage
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeLastWage"
                    id="employeeLastWage"
                    value={employeeLastWage}
                    onChange={(e) => setEmployeeLastWage(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeePayPreference"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pay options
                </label>
                <div className="mt-1">
                  <select
                    name="employeePayPreference"
                    id="employeePayPreference"
                    value={employeePayPreference}
                    onChange={(e) =>
                      // setEmployeeImage(e.target.value)
                      setEmployeePayPreference(e.target.value)
                    }
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>direct deposit</option>
                    <option>Check</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeDistance"
                  className="block text-sm font-medium text-gray-700"
                >
                  employeeDistance
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeDistance"
                    id="employeeDistance"
                    value={employeeDistance}
                    onChange={(e) => setEmployeeDistance(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeEthnicity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Race
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeEthnicity"
                    id="employeeEthnicity"
                    value={employeeEthnicity}
                    onChange={(e) => setEmployeeEthnicity(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="employeeCautions"
                  className="block text-sm font-medium text-gray-700"
                >
                  employee Cautions
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeCautions"
                    id="employeeCautions"
                    value={employeeCautions}
                    onChange={(e) => setEmployeeCautions(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="employeeJobTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeJobTitle"
                    id="employeeJobTitle"
                    value={employeeJobTitle}
                    onChange={(e) => setEmployeeJobTitle(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="employeeStartingWage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Starting Wage
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="employeeStartingWage"
                    value={employeeStartingWage}
                    id="employeeStartingWage"
                    onChange={(e) => setEmployeeStartingWage(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* <FileUpload /> */}

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
                {/* <input type="file" name="service_image" size='lg' onChange={(e) => setEmployee_image(e.target.files[0])}  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  /> */}
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
                Empoyee photo
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

export default AdminEditEmployeePage
