import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
// import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
// import API_BASE_URL from '../../../utilities/Constants'

const AdminCustomersPage = () => {

  // const dispatch = useDispatch();
  const [customers, setCustomers]= useState([])
  const [loading, setLoading] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const customersPerPage = 20;

  const pagesVisited = pageNumber * customersPerPage;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://node.greenjeans509.com/api/customers/list')
      // const request = await axios.get(`${API_BASE_URL}/api/customers/list`)
      setCustomers(request.data)
      return request;
    }
    fetchData()
     }, [])// eslint-disable-line react-hooks/exhaustive-deps


     const displayCustomers = customers
       .slice(pagesVisited, pagesVisited + customersPerPage)
       .map((customer, custIdx ) => {
       
         return (
           <tr
             key={customer.email}
             className={custIdx % 2 === 0 ? "bg-white" : "bg-gray-100"}
             // eslint-disable-next-line react/jsx-no-duplicate-props
             key={customer.customer_id}
           >
             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
               {customer.first_name}{" "}{customer.last_name}
             </td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               {customer.street_address}
             </td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               {customer.email}
             </td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               {customer.phone_number}
             </td>
             
             <td><img src={`https://node.greenjeans509.com/${customer.property_image}`} alt={customer.customer_id} /></td>
            
             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
               <Link to={`/admin/customer/${customer.customer_id}`} className="text-blue-600 hover:text-blue-900">
                 View
               </Link>
             </td>
           </tr>
         );
       });

    if (loading) {
      return <h2>Loading...</h2>;
    }
    const pageCount = Math.ceil(customers.length / customersPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
    return (
      <div className="flex flex-col container">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody>

            {displayCustomers}

          </tbody>
            </table>
          </div>
        </div>
      </div>
  

      
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
      </div>
  );
}

export default AdminCustomersPage;
