import React from 'react'


const Invoices = [
  { name: '100-7821', title: '09/15/2021', role: '159.99', email: '39.88' },
  { name: '101-2821', title: '08/15/2021', role: '159.99', email: '39.88' },
  { name: '100-8821', title: '07/15/2021', role: '159.99', email: '39.88' },
  { name: '102-9829', title: '06/15/2021', role: '159.99', email: '39.88' },
  { name: '103-4821', title: '05/15/2021', role: '159.99', email: '39.88' },
]

const InvoiceTables = () => {
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
                  Invoice Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
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
              {Invoices.map((person) => (
                <tr key={person.title}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
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

export default InvoiceTables
