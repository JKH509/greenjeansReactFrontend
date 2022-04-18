import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { Link, useNavigate } from "react-router-dom";
import { Constants } from "../../../utilities/Constants";
import FiveRowTable from "../../../components/tables/FiveRowTable";
import FiveRowDisplay from "../../../components/tables/FiveRowDisplay";
import SearchBar from "../admin_components/SearchBar";
import SearchTable from "../admin_components/SearchTable";



const AdminCustomersPage = () => {
  let navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

  const customersPerPage = 20;
  const pagesVisited = pageNumber * customersPerPage;
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    async function fetchData() {
      // const request = await axios.get(`${Constants.url.API_GET_ALL_CUSTOMERS}`)
      // const request = await axios.get('http://localhost:5001/api/customers/list')
      axios.get(`${Constants.url.API_GET_ALL_CUSTOMERS}`).then(
        (request) => {
          setIsLoaded(true);
          setCustomers(request.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
      // return request;
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [searchData, setSearchData] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const addClientButton = () => {
    navigate("/dashboard/create-client");
  };

  const searchItems = (searchValue) => {
    setSearchData(searchValue);
    if (searchData !== "") {
      const filteredData = customers.filter((item) => {
        return Object.values(item).join("").includes(searchData);
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(customers);
    }
  };

  const displayCustomers = customers
    .slice(pagesVisited, pagesVisited + customersPerPage)
    .map((customer, customerIdx) => {
      return (
        <tr key={customer.customer_id}>
          <td
            className={classNames(
              customerIdx !== customers.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
            )}
          >
            {customer.first_name} {customer.last_name}
          </td>
          <td
            className={classNames(
              customerIdx !== customers.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
            )}
          >
            {customer.street_address}
          </td>
          <td
            className={classNames(
              customerIdx !== customers.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
            )}
          >
            {customer.email}
          </td>
          <td
            className={classNames(
              customerIdx !== customers.length - 1
                ? "border-b border-gray-200"
                : "",
              "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
            )}
          >
            {customer.phone_number}
          </td>
          <td
            className={classNames(
              customerIdx !== customers.length - 1
                ? "border-b border-gray-200"
                : "",
              "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"
            )}
          >
            <Link to={`/admin/customer/${customer.customer_id}`}>View</Link>
            <br />
            <Link
              to={`/admin/customer/${customer.customer_id}/create-work-order/${customer.customer_id}`}
            >
              create work order
            </Link>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(customers.length / customersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Clients</h1>
              <p className="mt-2 text-sm text-gray-700">
                {/* {pageDescription} */}A complete list of all the clients and
                contact info, along with the link to there account.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                // onClick={buttonEvent}
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
              >
                Add Client
              </button>
            </div>
          </div>

          <div>
            {/* <SearchBar placeholder={"Search"} onChange={(e) => searchData(e.target.value)} /> */}
            <SearchBar
              placeholder={"Search"}
              onChange={(e) => searchItems(e.target.value)}
            />
           
            <SearchTable field1={searchData} />
           
          </div>

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                  <table
                    className="min-w-full border-separate"
                    style={{ borderSpacing: 0 }}
                  >
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">{displayCustomers}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <FiveRowTable
        people={customers}
        pagesVisited={pagesVisited}
        field1={"Name"}
        field2={"Address"}
        field3={"Email"}
        field4={"Phone"}
        displayPeople={displayCustomers}
        pageTitle={"Customers"}
        pageDescription={
          " A list of all the customers including their name, address, email and phone."
        }
        buttonTitle={"Add Client"}
        buttonEvent={() => addClientButton()}
      /> */}

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={4}
          onPageChange={changePage}
          containerClassName={
            "container bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 cont"
          }
          pageClassName={"text-sm text-gray-700"}
          pageLinkClassName={"text-sm text-gray-700"}
          previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          previousLinkClassName=""
          nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          nextLinkClassName=""
          activeClassName={"paginationActive"}
        />
      </>
    );
  }
};
export default AdminCustomersPage;
















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactPaginate from 'react-paginate';
// import { Link, useNavigate } from "react-router-dom";
// import { Constants } from "../../../utilities/Constants";
// import FiveRowTable from "../../../components/tables/FiveRowTable";
// import FiveRowDisplay from "../../../components/tables/FiveRowDisplay";



// const AdminCustomersPage = () => {
//   let navigate = useNavigate()

//   const [ customers, setCustomers ] = useState([]);
//   const [ loading ] = useState(false);
//   const [pageNumber, setPageNumber] = useState(0);

//   const customersPerPage = 20;
//   const pagesVisited = pageNumber * customersPerPage;
  

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(`${Constants.url.API_GET_ALL_CUSTOMERS}`);
//       // const request = await axios.get('http://localhost:5001/api/customers/list')
//       setCustomers(request.data);
//       return request;
//     }
//     fetchData();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps


//   const addClientButton =() => {
//     navigate('/dashboard/create-client')
//   }
 
// let tableId = 0
//   const displayCustomers = customers
//        .slice(pagesVisited, pagesVisited + customersPerPage)
//        .map((customer, customerIdx ) => {
//         //  {console.log(customerIdx)}
//          tableId = customer.customer_id
//          return ( 
           
//           <FiveRowDisplay 
//             people={customers} person={customer} personIdx={customerIdx} 
//             tableId={customer.customer_id}
//             id={customer.customer_id} field1={customer.first_name + " " + customer.last_name}
//             field2={customer.street_address} field3={customer.email} field4={customer.phone_number}
//             linkIs={<Link to={`/admin/customer/${customer.customer_id}`}>View</Link>}
//           />
          
//          )
//        })

//        if (loading) {
//         return <h2>Loading...</h2>;
//       }
//       const pageCount = Math.ceil(customers.length / customersPerPage);
//       const changePage = ({ selected }) => {
//         setPageNumber(selected);
//       };

//       console.log(tableId)

//   return (
//     <>
//       <FiveRowTable
//         people={customers}
//         pagesVisited={pagesVisited}
//         id={tableId}
//         field1={"Name"}
//         field2={"Address"}
//         field3={"Email"}
//         field4={"Phone"}
//         displayPeople={displayCustomers}
//         pageTitle={"Customers"}
//         pageDescription={
//           " A list of all the customers including their name, address, email and phone."
//         }
//         buttonTitle={"Add Client"}
//         buttonEvent={() => addClientButton()}
//       />
     

// <ReactPaginate
//           previousLabel={"Previous"}
//           nextLabel={"Next"}
//           breakLabel={"..."}
//           pageCount={pageCount}
//           marginPagesDisplayed={4}
//           onPageChange={changePage}
//           containerClassName={
//             "container bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 cont"
//           }
//           pageClassName={"text-sm text-gray-700"}
//           pageLinkClassName={"text-sm text-gray-700"}
//           previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//           previousLinkClassName=""
//           nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//           nextLinkClassName=""
//           activeClassName={"paginationActive"}
//         />
//     </>
//   );
// };

// export default AdminCustomersPage;
