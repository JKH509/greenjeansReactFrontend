import { Fragment, useState,useContext  } from 'react'

import { Disclosure } from '@headlessui/react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../helpers/AuthContext';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, XIcon, MenuIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

import { DashBoardSideNav } from './dashboard/DashBoardSideNav';

// CUSTOMERS 
import AdminCustomersPage from './customer_data/AdminCustomersPage'
import AdminAddCustomerPage from './customer_data/AdminAddCustomerPage';

// EMPLOYEES 
import AdminEmployeesPage from './employee_data/AdminEmployeesPage';
import AdminAddNewEmployeePage from './employee_data/AdminAddNewEmployeePage';

// ORDERS 
import AllOpenOrdersThatNeedSceduled from './customer_data/workorders/AllOpenOrdersThatNeedSceduled';
import ResponsiveSideNav from './dashboard/ResponsiveSideNav';
import FourRowTable from '../../components/tables/FourRowTable';
import FiveRowTable from '../../components/tables/FiveRowTable';
import SixRowTable from '../../components/tables/SixRowTable';
import ToggleTable from '../../components/tables/ToggleTable';
import InvoiceTable from '../../components/tables/InvoiceTable';
import CheckboxTable from '../../components/tables/CheckboxTable';
import ProfitLossTable from '../../components/tables/ProfitLossTable';

// Category
import AdminAddCategory from './category_data/AdminAddCategory';
import AdminCategoriesPage from './category_data/AdminCategoriesPage';
import AdminEditCategory from './category_data/AdminEditCategory';
import AdminCategoryPage from './category_data/AdminCategoryPage';


// INVOICES 

// SERVICES 

// CATAGORIES 





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dashboard = () => {
  const authState = useContext(AuthContext)
  const { setAuthState } = useContext(AuthContext)
  let location = useLocation();
  let navigate = useNavigate();
  let display = ""

// let path =[
//   location.pathname === "/dashboard/clients",
// location.pathname === "/dashboard/create-client"
// ]
// let view = [
//    <AdminCustomersPage />,
// ]

// path.forEach(element => {
  

// });

  /* Clients */
  if (location.pathname === "/dashboard/clients") {
    display = <AdminCustomersPage />
  } else if (location.pathname === "/dashboard/create-client") {
    display = <AdminAddCustomerPage />
  }
/* Employees */
  else if (location.pathname === "/dashboard/employees") {
    display = <AdminEmployeesPage />
  }else if (location.pathname === "/dashboard/admin/create/employee") {
    display = <AdminAddNewEmployeePage />
  }
/* Orders */
  else if (location.pathname === "/dashboard/all-open-orders") {
    display = <AllOpenOrdersThatNeedSceduled />
  }
/* Catagories */
else if (location.pathname === "/dashboard/admin/categories") {
  display = <AdminCategoriesPage />
}
else if (location.pathname === "/dashboard/admin/create/category") {
  display = <AdminAddCategory />
} 
else if (location.pathname === "/dashboard/admin/category/:category_id") {
  display = <AdminCategoryPage />
} 

else if (location.pathname === "/dashboard/admin/edit/category/:category_id") {
  display = <AdminEditCategory />
}


  
  /* Tests */
  else if (location.pathname === "/dashboard/four") {
    display = <FourRowTable />
  }else if (location.pathname === "/dashboard/five") {
    display = <FiveRowTable />
  }else if (location.pathname === "/dashboard/six") {
    display = <SixRowTable />
  }else if (location.pathname === "/dashboard/toggle") {
    display = <ToggleTable />
  }else if (location.pathname === "/dashboard/invoice") {
    display = <InvoiceTable />
  }else if (location.pathname === "/dashboard/checkbox") {
    display = <CheckboxTable />
  }else if (location.pathname === "/dashboard/profit-loss") {
    display = <ProfitLossTable />
  } else {
    display = ""
  }
 

/* Services */


const logOut = async () => {
  sessionStorage.removeItem("accessToken");
  window.sessionStorage.clear();
  setAuthState({userName: "", id: 0, status:false})
  navigate("/")
  window.location.reload();
};

  return (
    <div>
      <ResponsiveSideNav dashboardContent={display} LogOutButton={<button onClick={() => {logOut()}}>Log out</button>} />   
    </div>
  );
};

export default Dashboard
