import React, {useState} from 'react'
// import { API_BASE_URL } from '../../../utilities/Constants'
import axios from 'axios';
// import FileUpload from '../file_uploads/FileUpload';
import { v4 as uuidv4 } from 'uuid';
uuidv4();


const AdminAddNewEmployeePage = () => {

  const addNewEmployee = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("uuid", uuid);
    formData.append("employeeFirstName", employeeFirstName);
    formData.append("employeeLastName", employeeLastName);
    formData.append("employeeEmail", employeeEmail);
    formData.append("employeePhone", employeePhone);
    formData.append("employeeMobile", employeeMobile);
    formData.append("employeeAddress", employeeAddress);
    formData.append("employeeAddressTwo", employeeAddressTwo);
    formData.append("employeeCity", employeeCity);
    formData.append("employeeState", employeeState);
    formData.append("employeeZip", employeeZip);
    formData.append("employeeCountry", employeeCountry);
    formData.append("employeeDistance", employeeDistance);
    formData.append("employeeJobTitle", employeeJobTitle);
    formData.append("employeeStartingWage", employeeStartingWage);
    formData.append("employeeLastWage", employeeLastWage);
    formData.append("employeeGender", employeeGender);
    formData.append("employeeEthnicity", employeeEthnicity);
    formData.append("employeeDriversLicenseStatus", employeeDriversLicenseStatus);
    formData.append("employeeMedicalConditions", employeeMedicalConditions);
    formData.append("employeeCautions", employeeCautions);
    formData.append("employee_image", employee_image);
    formData.append("employeePayPreference", employeePayPreference);
    
    axios.post('https://node.greenjeans509.com/api/employee/add-employee', formData);
  };


  const [ uuid ] = useState(uuidv4())
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
  const [ employeeEthnicity , setEmployeeEthnicity ] = useState('caucasion')
  const [ employeeDriversLicenseStatus , setEmployeeDriversLicenseStatus ] = useState('')
  const [ employeeMedicalConditions , setEmployeeMedicalConditions ] = useState('')
  const [ employeeCautions , setEmployeeCautions ] = useState('')
  const [ employee_image , setEmployee_image ] = useState('')
  const [ employeePayPreference, setEmployeePayPreference ] = useState('checking')
  

  return (
    <div className="container">
     <form
      className="space-y-8 divide-y divide-gray-200 container"
      onSubmit={addNewEmployee}
      method="POST"
      // action="/profile-upload-single"
       encType='multipart/form-data'
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">

          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Empoyee Information
              <input type='hidden' value={uuid} />
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

{/* first name        */}
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
                  autoComplete="given-name"
                  onChange={(e) => setEmployeeFirstName(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* Employee last */}
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
                  autoComplete="family-name"
                  onChange={(e) => setEmployeeLastName(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* email */}
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
                  autoComplete="email"
                  onChange={(e) => setEmployeeEmail(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* phone */}
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
                  autoComplete="tel"
                  onChange={(e) => setEmployeePhone(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* mobile */}
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
                  onChange={(e) => setEmployeeMobile(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* gender */}
            <div className="sm:col-span-1">
              <label
                htmlFor="employeeEmployeeGender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <div className="mt-1">
                {/* <input
                  type="text"
                  name="employeeEmployeeGender"
                  id="employeeEmployeeGender"
                  onChange={(e) => setEmployeeGender(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                /> */}

<select
                    name="employeeGender"
                    id="employeeGender"
                   
                    onChange={(e) => setEmployeeGender(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
              </div>
            </div>
{/* address */}
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
                  autoComplete="street-address"
                  onChange={(e) => setEmployeeAddress(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* city */}
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
                  autoComplete="address-level2"
                  onChange={(e) => setEmployeeCity(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* state */}
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
                  autoComplete="address-level1"
                  onChange={(e) => setEmployeeState(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* zip */}
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
                  onChange={(e) => setEmployeeZip(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* country */}
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
                  onChange={(e) => setEmployeeCountry(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
{/* medical */}
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
                  onChange={(e) => setEmployeeMedicalConditions(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* license */}
            <div className="sm:col-span-1">
              <label
                htmlFor="employeeDriversLicenseStatus"
                className="block text-sm font-medium text-gray-700"
              >
               License Status
              </label>
              <div className="mt-1">
                {/* <input
                  type="text"
                  name="employeeDriversLicenseStatus"
                  id="employeeDriversLicenseStatus"
                  onChange={(e) => setEmployeeDriversLicenseStatus(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                /> */}
                  <select
                    name="employeeDriversLicenseStatus"
                    id="employeeDriversLicenseStatus"
                    onChange={(e) => setEmployeeDriversLicenseStatus(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>valid</option>
                    <option>not-valid</option>
                  </select>




              </div>
            </div>
{/* pay options */}
            <div className="sm:col-span-1">
              <label
                htmlFor="employeePayPreference"
                className="block text-sm font-medium text-gray-700"
              >
                Pay options
              </label>
              <div className="mt-1">
                {/* <input
                  type="text"
                  name="employeePayPreference"
                  id="employeePayPreference"
                  onChange={(e) =>
                    // setEmployeeImage(e.target.value)
                    setEmployeePayPreference(e.target.value)
                  }
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                /> */}
                <select
                    name="employeePayPreference"
                    id="employeePayPreference"
                    onChange={(e) =>
                 
                      setEmployeePayPreference(e.target.value)
                    }
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>direct deposit</option>
                    <option>Check</option>
                  </select>





              </div>
            </div>
{/* distance */}
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
                  onChange={(e) => setEmployeeDistance(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* ethnicity */}
            <div className="sm:col-span-1">
              <label
                htmlFor="employeeEnd"
                className="block text-sm font-medium text-gray-700"
              >
                Race
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="employeeEnd"
                  id="employeeEnd"
                  onChange={(e) => setEmployeeEthnicity(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* notes */}
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
                  onChange={(e) => setEmployeeCautions(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* job title */}
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
                  onChange={(e) => setEmployeeJobTitle(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
{/* starting wage */}
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
                  id="employeeStartingWage"
                  onChange={(e) => setEmployeeStartingWage(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
</div>
       
{/* photo */}
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
              <input type="file" name="service_image" size='lg' onChange={(e) => setEmployee_image(e.target.files[0])}  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  />
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
{/* buttons */}
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
  )
}

export default AdminAddNewEmployeePage
