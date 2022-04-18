import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import { XIcon, } from '@heroicons/react/solid';

import { CalendarIcon, UserGroupIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, MenuIcon, UserIcon } from '@heroicons/react/outline'

import Logo from '../../../assets/images/web.png'
import DashboardHeader from './DashboardHeader';
import DashBoardReportOne from './DashBoardReportOne';
import ComplaintReport from './ComplaintReports/ComplaintReport';



const navigation = [
  // { name: 'Dashboard', icon: HomeIcon, current: true, href: '#' },
  // { name: 'ClientSide', icon: HomeIcon, current: false, to: '/' },
  { name: 'Dashboard', icon: HomeIcon, current: false, to: '/dashboard' },
    {
    name: 'Client',
    icon: UserIcon,
    current: false,
    children: [
      { name: 'All Clients', to: '/dashboard/clients' },
      { name: 'Add New Customer', to: '/dashboard/create-client' },
      { name: 'Client Search By Id', to: '#' },
      { name: 'Client Search By Name', to: '#' },
      { name: 'Client Invoice', to: '#' },
      { name: 'Cancled Clients', to: '#' },
      { name: 'Fired Clients', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Invoice',
    icon: UserIcon,
    current: false,
    children: [
      { name: 'All Invoices', to: '/dashboard/invoices' },
      { name: 'Create Invoice', to: '/dashboard/create-invoice' },
      { name: 'Unpaid Invoices', to: '#' },
      { name: 'Client Search By Name', to: '#' },
      { name: 'Client Invoice', to: '#' },
      { name: 'Cancled Clients', to: '#' },
      { name: 'Fired Clients', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Employee',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'All Employees', to: '/dashboard/employees' },
      { name: 'Add Employee', to: '/dashboard/admin/create/employee' },
      { name: 'Employee By Name', to: '#' },
      { name: 'Employee By Id', to: '#' },
      { name: 'Employee Payroll', to: '#' },
      { name: 'Employees Quit', to: '#' },
      { name: 'Employees Fired', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Payroll',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'All Payroll', to: '/dashboard/employees' },
      { name: 'Create Payroll', to: '/dashboard/admin/create/employee' },
      { name: 'Unpaid Payroll', to: '#' },
      { name: 'Employee By Id', to: '#' },
      { name: 'Employee Payroll', to: '#' },
      { name: 'Employees Quit', to: '#' },
      { name: 'Employees Fired', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Teams',
    icon: UserGroupIcon,
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
    name: 'Service',
    icon: InboxIcon,
    current: false,
    children: [
      { name: 'All Services', to: '/dashboard/admin/services' },
      { name: 'Add Service', to: '/dashboard/admin/create/service' },
      { name: 'Team By Name', to: '#' },
      { name: 'Team By Id', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
    {
    name: 'Category',
    icon: InboxIcon,
    current: false,
    children: [
      { name: 'All Categories', to: '/dashboard/admin/categories' },
      { name: 'Add Category', to: '/dashboard/admin/create/category' },
      
      { name: 'Team By Name', to: '#' },
      { name: 'Team By Id', to: '#' },
      { name: 'Calendar', to: '#' },
      { name: 'Settings', to: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: FolderIcon,
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
    icon: CalendarIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Documents',
    icon: InboxIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Reports',
    icon: ChartBarIcon,
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



const ResponsiveSideNav = ({dashboardContent, LogOutButton}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  let location = useLocation()

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full">
        <body className="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img className="h-8 w-auto" src={Logo} alt="Workflow" />
                    Uptrend RBS
                  </div>
                  <nav
                    className="flex-1 px-2 space-y-1 bg-white"
                    aria-label="Sidebar"
                  >
                    {navigation.map((item) =>
                      !item.children ? (
                        <div key={item.name}>
                          <a
                            href={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </div>
                      ) : (
                        <Disclosure
                          as="div"
                          key={item.name}
                          className="space-y-1"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  item.current
                                    ? "bg-gray-100 text-gray-900"
                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                )}
                              >
                                <item.icon
                                  className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                                <svg
                                  className={classNames(
                                    open
                                      ? "text-gray-400 rotate-90"
                                      : "text-gray-300",
                                    "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                  )}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6L14 10L6 14V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </Disclosure.Button>
                              <Disclosure.Panel className="space-y-1">
                                {item.children.map((subItem) => (
                                  <Disclosure.Button
                                    key={subItem.name}
                                    as="a"
                                    href={subItem.to}
                                    className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
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

                {/* <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <Link to="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </Link>
                </div> */}
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                src={Logo}
                alt="Workflow"
              />
              Uptrend RBS
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav
                className="flex-1 px-2 space-y-1 bg-white"
                aria-label="Sidebar"
              >
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <a
                        href={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
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
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            )}
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open
                                  ? "text-gray-400 rotate-90"
                                  : "text-gray-300",
                                "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as="a"
                                href={subItem.to}
                                className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
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
            {LogOutButton}
          </div>
          {/* {LogOutButton} */}
        </div>

        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <DashboardHeader />

            {/* <div className="">
            <div className="flex-none w-14 h-14">
              01
            </div>
            <div className="flex-initial w-64 ...">
            <DashBoardReportOne />
            </div>
            <div className="flex-initial w-32 ...">
              03
            </div>
          </div> */}

            {location.pathname !== "/dashboard" ? (
              ""
            ) : (
              <>
                <div className="m-4 ">
                  <DashBoardReportOne />
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                  <div className="ml-4 mt-4">
                    <ComplaintReport />
                  </div>
                  <div className="ml-4 mt-4">
                    <DashBoardReportOne />
                  </div>

                  <div className="mr-4 mt-4">
                    <DashBoardReportOne />
                  </div>
                </div>
              </>
            )}
            <div className="py-6">
             

              {/* Changes page width based on page  */}
              {/* {location.pathname === "/dashboard/employees"
                ? "employees responsive sidebar page"
                : "dashboard responsive sidebar page"} */}
              <div className=" mx-auto px-4 sm:px-6 md:px-8 w-11/12">
                {dashboardContent}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ResponsiveSideNav