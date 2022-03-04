import React, { Fragment,  useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
import {  useNavigate } from 'react-router';

import logo from '../assets/images/web.png'

import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    to: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    to: '/',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", to: '/', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    to: '/',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    to: '/',
    icon: RefreshIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    to: '/dashboard',
    icon: DocumentReportIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    to: '/',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', to: '/' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', to: '/' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', to: '/' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {

  const authState = useContext(AuthContext)
  const { setAuthState } = useContext(AuthContext)

  const location = useLocation()
  let navigate = useNavigate();

  
  const login = async (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const logOut = async () => {
    sessionStorage.removeItem("accessToken");
    window.sessionStorage.clear();
    setAuthState({userName: "", id: 0, status:false})
    navigate("/")
    window.location.reload();
  };



  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link to="/" className="flex">
            <span className="sr-only">UpTrend logo</span>
            <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>
                      <Link to="/services" className="text-gray-600">
                        Services
                      </Link>
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-30  -ml-4 mt-3 transform w-screen max-w-md lg:max-w-1xl">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          <Link
                            // key={item.name}
                            to="/lawns"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-3 w-3 rounded-md bg-green-500 text-white sm:h-6 sm:w-6">
                              {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Lawns
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                            </div>
                          </Link>

                          <Link
                            // key={item.name}
                            to="/fertilizer"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-3 w-3 rounded-md bg-green-500 text-white sm:h-6 sm:w-6">
                              {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Fertilizer
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                            </div>
                          </Link>

                          <Link
                            // key={item.name}
                            to="/snow"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-3 w-3 rounded-md bg-green-500 text-white sm:h-6 sm:w-6">
                              {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Snow
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                            </div>
                          </Link>

                          <Link
                            // key={item.name}
                            to="/shrub-garden"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-3 w-3 rounded-md bg-green-500 text-white sm:h-6 sm:w-6">
                              {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Shrub and Garden
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                            </div>
                          </Link>

                          {/* {solutions.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </div>
                          </Link>
                        ))} */}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/estimates"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Estimates
            </Link>

            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Clients
            </Link>

            {authState.authState.id === 1 || authState.authState.id === 4 ? (
              <Link
                to="/dashboard"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                dashboard
              </Link>
            ) : (
              <></>
            )}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    {/* ONLY display if user is logged in as ADMIN */}
                    {authState.authState.id !== 1 &&
                    authState.authState.id !== 4 ? (
                      // <span>More</span>
                      ""
                    ) : (
                      <>
                        <span>Admin</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {authState.authState.id === 1 ||
                    authState.authState.id === 4 ? (
                      <Popover.Panel className="absolute z-30  left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {/* {resources.map((item) => ( */}
                            {/* <Link key={item.name} href={item.href} className="-m-3 p-3 block rounded-md hover:bg-gray-50"> */}

                            <>
                              <Link
                                to="/admin/customers"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Customer List
                                </p>
                              </Link>
                              <Link
                                to="/admin/create/customer"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Add Customer
                                </p>
                              </Link>

                              <Link
                                to="/admin/employees"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Employee List
                                </p>
                              </Link>
                              <Link
                                to="/admin/create/employee"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Add Employee
                                </p>
                              </Link>

                              <Link
                                to="/admin/services"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Service List
                                </p>
                              </Link>
                              <Link
                                to="/admin/create/service"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Add Service
                                </p>
                              </Link>

                              <Link
                                to="/admin/categories"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Category List
                                </p>
                              </Link>
                              <Link
                                to="/admin/create/category"
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Add Category
                                </p>
                              </Link>
                            </>
                          </div>
                        </div>
                      </Popover.Panel>
                    ) : (
                      ""
                    )}
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="flex items-center md:ml-12">
            {!sessionStorage.getItem("accessToken") ? (
              <>
                <Link
                  to="/login"
                  onClick={login}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Log in
                </Link>

                <Link
                  to="/register"
                  className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                {location.pathname === "/" && (
                  <Link
                    to={`/profile/${authState.authState.userName}`}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    My Profile
                  </Link>
                )}

                <Link
                  to="/"
                  onClick={logOut}
                  className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Log out
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="green jeans" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {location.pathname !== "/" && <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Home
                </Link>}
              <Link
                  to="/services"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </Link>

                <Link
                  to="/estimates"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Estimates
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Clients
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact Us
                </Link>
                {/* {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))} */}
              </div>
              {!sessionStorage.getItem("accessToken") ? 
              <div className="mt-6">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
              : 
              <Link
                  to="/"
                  onClick={logOut}
                  className="ml-8 mt-3 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Log out
                </Link>
              }
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header
