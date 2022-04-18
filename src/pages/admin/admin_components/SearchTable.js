import React from 'react'
import { Link } from 'react-router-dom';

const SearchTable = ({id, field1, field2, field3, field4, field5}) => {
  return (
    <div>
      <p>{id}{field1} {field2} {field3} {field4} {field5}</p>
      {/* <thead>
      <tr key={id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {field1}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {field2}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {field3}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {field4}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {field5}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link
          to=''
          // to={`/linkto/${job_id}`}
          className="text-blue-600 hover:text-blue-900"
        >
          view
        </Link>
      </td>
    </tr>
      </thead> */}
    
    </div>
  );
}


{/* <select */}
/*
// here we create a basic select input
// we set the value to the selected value
// and update the setFilterParam() state every time onChange is called
*/
  // onChange={(e) => {
  // setFilterParam(e.target.value);
  //  }}
  //  className="custom-select"
  //  aria-label="Filter Countries By Region">
  //   <option value="All">Filter By Region</option>
  //   <option value="Africa">Africa</option>
  //   <option value="Americas">America</option>
  //   <option value="Asia">Asia</option>
  //   <option value="Europe">Europe</option>
  //   <option value="Oceania">Oceania</option>
  //   </select>
  //   <span className="focus"></span>
  //   </div>







export default SearchTable