import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { format, compareAsc } from 'date-fns'
import { Link } from 'react-router-dom';


const AllOpenOrdersThatNeedSceduled = () => {

 const [ workOrders, setWorkOrders ] = useState([])
 format(new Date(2014, 1, 11), 'MM/dd/yyyy')

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController()

      const allUnscheduledWorkOrders = await axios(
        'http://localhost:5001/api/work-orders/list'
        // `http://localhost:5001/api/work-orders/list`
      );
  // console.log(allUnscheduledWorkOrders.data)
  setWorkOrders(allUnscheduledWorkOrders.data)
  // console.log(workOrders)
      // const request = await axios.get(
      //   `${Constants.url.API_GET_CUSTOMER_BY_ID}/${customer_id}`
      // );
      
      // setOpenWorkOrder(workOrderByCustomerId.data)
      // setCustomer(request.data);

      return () => {
        controller.abort()
      }
    };
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

//   let service_id = 0
// if(service_id === 1){
//   service_id = "Mowing"
// }
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
   /* This example requires Tailwind CSS v2.0+ */
<div className='sm:px-8 w-full'>
    <div className="px-4 sm:px-6 md:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Open Orders</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the open accounts including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            Add work order
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
                      Property Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Service
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
                      Role
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
                  {workOrders.map((order, orderIdx) => (
                    <tr key={order.job_id}>
                      <td
                        className={classNames(
                          orderIdx !== workOrders.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                      >
                        {order.property_name !== "" ? "N/A" : <>{order.property_name}</>}
                      </td>
                      <td
                        className={classNames(
                          orderIdx !== workOrders.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                        )}
                      >
                        {order.service_id}
                      </td>
                      <td
                        className={classNames(
                          orderIdx !== workOrders.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                        )}
                      >
                        {/* {order.createdAt} */}
                        {format(new Date(order.createdAt), 'MM/dd/yyyy')}
                      </td>
                      <td
                        className={classNames(
                          orderIdx !== workOrders.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                      >
                        {order.role}
                      </td>
                      <td
                        className={classNames(
                          orderIdx !== workOrders.length - 1 ? 'border-b border-gray-200' : '',
                          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
                        )}
                      >
                        <Link to="/" className="text-blue-600 hover:text-blue-900">
                          View<span className="sr-only">, {order.name}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default AllOpenOrdersThatNeedSceduled