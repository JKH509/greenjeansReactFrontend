import React from 'react'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'



    /* This example requires Tailwind CSS v2.0+ */


// const pages = [
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Project Nero', href: '#', current: true },
// ]

export const DashboardCrumbs = (props) => {
  return (
    <nav className="flex container" aria-label="Breadcrumb">
      <ol  className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
       
      </ol>
    </nav>

  )
}
