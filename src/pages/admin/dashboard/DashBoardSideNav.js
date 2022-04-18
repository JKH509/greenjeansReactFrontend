// import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'


// import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, XIcon, MenuIcon } from '@heroicons/react/outline'
// import { Dialog, Transition } from '@headlessui/react'
// import AdminCustomersPage from './customer_data/AdminCustomersPage'
// import UnscheduledJobs from './dashboard/WorkOrders/UnscheduledJobs';
// import AdminEmployeesPage from './employee_data/AdminEmployeesPage';
// import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'




const navigation = [
  { name: 'Dashboard', to: '/dashboard', current: true },
  {
    name: 'Client',
    current: false,
    children: [
      { name: 'All Clients', to: '/dashboard/clients' },
      { name: 'Add New Customer', to: '/dashboard/create-client' },
      { name: 'Client Search By Id', to: '#' },
      { name: 'Client Search By Name', to: '#' },
      { name: 'Cancled Clients', to: '#' },
      { name: 'Fired Clients', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Employee',
    current: false,
    children: [
      { name: 'All Employees', to: '/dashboard/employees' },
      { name: 'Add Employee', to: '/dashboard/admin/create/employee' },
      { name: 'Employee By Name', to: '#' },
      { name: 'Employee By Id', to: '#' },
      { name: 'Employees Quit', to: '#' },
      { name: 'Employees Fired', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Team',
    current: false,
    children: [
      { name: 'All Teams', to: '/dashboard/employees' },
      { name: 'Add Team', to: '/dashboard/admin/create/employee' },
      { name: 'Team By Name', to: '#' },
      { name: 'Team By Id', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Projects',
    current: false,
    children: [
      { name: 'Open Orders', to: '/dashboard/all-open-orders' },
      { name: 'Create Order', to: '/dashboard/all-open-orders' },
      { name: 'Members', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Calendar',
    current: false,
    children: [
      { name: 'Overview', to: '#' },
      { name: 'Members', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Documents',
    current: false,
    children: [
      { name: 'Overview', to: '#' },
      { name: 'Members', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Reports',
    current: false,
    children: [
      { name: 'Completed Jobs YTD', to: '#' },
      { name: 'Incomplete Jobs YTD', to: '#' },
      { name: 'Client By Expense', to: '#' },
      { name: 'Employee By Expense', to: '#' },
      { name: 'Profit & Loss YTD', to: '#' },
      { name: 'Teams By Expense', to: '#' },
      { name: 'Income YTD', to: '#' },
      { name: 'Loss YTD', to: '#' },
    ],
  },
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const DashBoardSideNav = () => {



  return (
    <>
    <div className="flex flex-col flex-grow w-64 border-r border-gray-200 pt-5 pb-4 bg-white  md:fixed md:inset-y-0">
    <div className="flex items-center flex-shrink-0 px-4">
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        alt="Workflow"
      />
    </div>

    
    <div className="mt-5 flex-grow flex flex-col">
      <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
        {navigation.map((item) =>
          !item.children ? (
            <div key={item.name}>
              <a
                href={item.to}
                className={classNames(
                  item.current = true
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                {item.name}
              </a>
            </div>
          ) : (
            <Disclosure as="div" key={item.name} className="space-y-1">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    )}
                  >
                    <svg
                      className={classNames(
                        open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                        'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                      )}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                    {item.name}
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-1">
                    {item.children.map((subItem) => (
                      <Disclosure.Button
                        key={subItem.name}
                        as="a"
                        href={subItem.to}
                        className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        {subItem.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )
        )}
      </nav>
    </div>
  </div>   
</>
  )
}
