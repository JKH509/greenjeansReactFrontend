import React, {useState} from 'react';
// import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const FiveRowTable = (
  { 
    array, field1, field2, field3, field4,  
    pageTitle, pageDescription, buttonTitle, buttonEvent,
  }) => {


  const [pageNumber, setPageNumber] = useState(0);
  const customersPerPage = 20;
  const pagesVisited = pageNumber * customersPerPage;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const displayPeople = array
    .slice(pagesVisited, pagesVisited + customersPerPage)
    .map((person, personIdx) => {
      return (
          <tr key={person.employee_id}>
          <td
            className={classNames(
              personIdx !== array.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
            )}
          >
            {person.first_name} {person.last_name} 
          </td>
          <td
            className={classNames(
              personIdx !== array.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
            )}
          >
            {person.street_address}
          </td>
          <td
            className={classNames(
              personIdx !== array.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
            )}
          >
            {person.job_title}
          </td>
          <td
            className={classNames(
              personIdx !== array.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
            )}
          >
            {person.phone_number}
          </td>
          <td
            className={classNames(
              personIdx !== array.length - 1
                ? "border-b border-gray-200"
                : "",
              "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"
            )}
          >
            <Link to={`/admin/employee/${person.employee_id}`}>View</Link>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(array.length / customersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // if (error) {
  //   return <>{error.message}</>;
  // } else if (!isLoaded) {
  //   return <h2>Loading...</h2>;
  // } else {



  return (
    <div className="px-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold text-gray-900">{pageTitle}</h1>
        <p className="mt-2 text-sm text-gray-700">
          {pageDescription}
        </p>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          onClick={buttonEvent}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
        >
          {buttonTitle}
        </button>
      </div>
    </div>

    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="shadow-sm ring-1 ring-black ring-opacity-5">
            <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    {field1}
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    {field2}
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    {field3}
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    {field4}
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">

               {displayPeople}


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
// }

export default FiveRowTable