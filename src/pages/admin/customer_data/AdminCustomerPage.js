import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Constants } from '../../../utilities/Constants'


import InvoiceTables from "../admin_components/InvoiceTables";
import BackButtons from "../../../components/buttons/BackButtons";
import WorkOrderTable from "../admin_components/WorkOrderTable";
import WorkOrderObject from "../admin_components/WorkOrderObject";
import TableHead from "../admin_components/TableHead";


const AdminCustomerPage = () => {
  let navigate = useNavigate()
  const { customer_id } = useParams();
  const [customer, setCustomer] = useState('');
  const [ openWorkOrder, setOpenWorkOrder ] = useState('')

  const onClickAddButton =() => {
    alert("clicked")
    navigate(`/admin/customer/:customer_id/create-work-order/${customer_id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController()

      const workOrderByCustomerId = await axios(
        `http://localhost:5001/api/workOrder/open-order-by-customer-id/${parseInt(customer_id)}`
      );
      const request = await axios.get(
        `${Constants.url.API_GET_CUSTOMER_BY_ID}/${customer_id}`
      );
      
      setOpenWorkOrder(workOrderByCustomerId.data[0])
      setCustomer(request.data);
      return () => {
        controller.abort()
      }
    };
    fetchData()
  }, [customer_id]); // eslint-disable-line react-hooks/exhaustive-deps

  let job_status = 0
  if (openWorkOrder === 'undefined' || openWorkOrder === '') {
    job_status = 0
    // console.log('IS undefined ',job_status )
  } else if (openWorkOrder){
    job_status = openWorkOrder.job_status
    // console.log('Defined ',job_status )
  }
  
      
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg container">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 ">
          Customer Information
        </h3>
        <p className="mt-1 max-w-6xl text-sm text-gray-500">account details.</p>
        <span className="d-flex justify-content-end">

          <img
            src={`${Constants.url.API_URL}/${customer.property_image}`}
            alt=""
            style={{ width: "350px" }}
            className=""
          />

        </span>
      </div>

      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {customer.first_name} {customer.last_name}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Service Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {customer.street_address} <br />
              {customer.city}, {customer.state}
              <br />
              {customer.postal_code} {customer.country}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">{customer.email}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Service Day(s)
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {customer.preferred_priority}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              last payment recieved
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              9/15/2021 in the amount of $123.23
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Current balance
            </dt>
            <dd className="mt-1 text-sm text-gray-900">67.98</dd>
          </div>

          <div className="sm:col-span-2">
            <hr />
            <div className="grid grid-cols-2  md:grid-cols-3 gap-x-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Last service performed
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Fertilized flower beds, applied weed and feed. 10/19/2022
                  10:37 AM
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Service Day(s)
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {/* {customer.preferred_priority} */}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Service Day(s)
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {/* {customer.preferred_priority} */}
                </dd>
              </div>
            </div>
            <hr />

            <div>
              <dt className="text-sm font-medium text-gray-500">Work Orders</dt>
            </div>

            {job_status !== 0 ? (
              <>
                <div className="flex flex-col mt-4">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <TableHead
                            title1={"Job ID"}
                            title2={"Property Name"}
                            title3={"Service"}
                            title4={"Requested Date"}
                            title5={"Estimated Price"}
                      
                            title6={"Add Job"}
                            // button={"add job"}
                            button={<button onClick={() => onClickAddButton()}>Add Job</button>}
                          />
                          <tbody className="bg-white divide-y divide-gray-200">
                            <WorkOrderObject
                              job_id={openWorkOrder.job_id}
                              job_property_name={
                                openWorkOrder.job_property_name
                              }
                              service_id={openWorkOrder.service_id}
                              createdAt={openWorkOrder.createdAt}
                              job_price={openWorkOrder.job_price}
                            />
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                No work orders <br /> <Link to={`/admin/customer/:customer_id/create-work-order/${customer_id}`}>Create Request</Link>
              </>
            )}

            <dt className="text-sm font-medium text-gray-500 mt-3">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
            <InvoiceTables />
          </div>

          <div className="sm:col-span-2 d-flex justify-evenly">
            {/* <Link to={navigate.back()}>back</Link> */}
            {/* <button onClick={() => navigate.goBack()}>Back</button> */}
            <BackButtons />
            <Link to={`/admin/edit/customer/${customer.customer_id}`}>
              edit
            </Link>
            <Link
              to={`/admin/customer/${customer.customer_id}/create-work-order/${customer.customer_id}`}
            >
              create work order
            </Link>
            <Link to={`/admin/customer/invoice/${customer.customer_id}`}>
              create invoice
            </Link>
            {/* /admin/customer/:customer_id/create-work-order */}
          </div>
        </dl>
      </div>
    </div>
  );
};

export default AdminCustomerPage;
