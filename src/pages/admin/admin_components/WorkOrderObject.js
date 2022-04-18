import React from 'react'
import { Link } from 'react-router-dom'

const WorkOrderObject = ({job_id, job_property_name, service_id, createdAt, job_price }) => {

  if (service_id === 1) {
    service_id = "Mowing"
  } else {
    
  }

  return (
            <tr key={ job_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ job_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ job_property_name === "" && "N/A"}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ service_id }</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ job_price !== 0.0 ? <>${ job_price}</>: ""}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/linkto/${job_id}`} className="text-blue-600 hover:text-blue-900"> 
                      view
                    </Link> 
                  </td>
                </tr>
  )
}

export default WorkOrderObject