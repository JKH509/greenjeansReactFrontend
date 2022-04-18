import React from 'react'

const WorkOrderTable = (props) => {
  return (
    <div className="flex flex-col">
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
                  Invoice Number {props.job_id}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date {props.createdAt}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Past Due
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Due
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>


            <tbody className="bg-white divide-y divide-gray-200">
              {props.workOrderRequest.map((person) => (
                <tr key={person.title}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.job_contact_first_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.job_contact_last_name}</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.day}</td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/view" className="text-indigo-600 hover:text-indigo-900">
                      view
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>

            
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WorkOrderTable