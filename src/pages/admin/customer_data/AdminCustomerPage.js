import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Constants } from '../../../utilities/Constants'

import InvoiceTables from "../admin_components/InvoiceTables";

const AdminCustomerPage = () => {
  const { customer_id } = useParams();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${Constants.url.API_GET_CUSTOMER_BY_ID}/${customer_id}`
      );
      setCustomer(request.data);
      return request;
    }
    fetchData();
  }, [customer_id]); // eslint-disable-line react-hooks/exhaustive-deps

  // const deleteCustomer = (customer_id) => {
  //   axios
  //     .delete(`https://node.greenjeans509.com/api/customer/delete/${customer_id}`)
  //     // .delete(`http://localhost:5001/api/customer/delete/${customer_id}`)
  //     .then((response) => {});
  // };

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
                  {customer.preferred_priority}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Service Day(s)
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {customer.preferred_priority}
                </dd>
              </div>
            </div>

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
            <Link to="">back</Link>
            <Link to={`/admin/edit/customer/${customer.customer_id}`}>
              edit
            </Link>
            <Link to="">create invoice</Link>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default AdminCustomerPage;
