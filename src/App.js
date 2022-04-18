import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthContext } from './helpers/AuthContext';
import axios from 'axios'
import AdminAddCustomerPage from './pages/admin/customer_data/AdminAddCustomerPage';
import AdminCustomerInvoicePage from './pages/admin/customer_data/AdminCustomerInvoicePage';
import AdminCustomerPage from './pages/admin/customer_data/AdminCustomerPage';
import AdminCustomersPage from './pages/admin/customer_data/AdminCustomersPage';
import AdminEditCustomerPage from './pages/admin/customer_data/AdminEditCustomerPage';
// import AdminTest from './pages/admin/customer_data/AdminTest';
import Dashboard from './pages/admin/Dashboard';
import AdminAddNewEmployeePage from './pages/admin/employee_data/AdminAddNewEmployeePage';
import AdminEditEmployeePage from './pages/admin/employee_data/AdminEditEmployeePage';
import AdminEmployeePage from './pages/admin/employee_data/AdminEmployeePage';
import AdminEmployeesPage from './pages/admin/employee_data/AdminEmployeesPage';
import AdminAddServicePage from './pages/admin/service_data/AdminAddServicePage';
import AdminEditServicePage from './pages/admin/service_data/AdminEditServicePage';
import AdminServicesPage from './pages/admin/service_data/AdminServicesPage';
import HomePage from './pages/home/HomePage';
// import ServicesPage from './pages/services/ServicesPage';
// import NotFound from './NotFound';
// import Footer from './shared/Footer';
import Header from './shared/Header'
import AdminServicePage from './pages/admin/service_data/AdminServicePage';
import EmployeeProfile from './pages/profiles/EmployeeProfile';
// import Lawns from './pages/services/lawn/Lawns';
// import FertilizerPage from './pages/services/fertilizer/FertilizerPage';
// import Snow from './pages/services/snow/Snow';
import AdminCategoriesPage from './pages/admin/category_data/AdminCategoriesPage';
import AdminAddCategory from './pages/admin/category_data/AdminAddCategory';
// import AdminEditCategory from './pages/admin/category_data/AdminEditCategory';
import AdminCategoryPage from './pages/admin/category_data/AdminCategoryPage';
import CategoryPage from './pages/services/category/CategoryPage';
import LoginPage from './LoginSignup/LoginPage';
import RegisterPage from './LoginSignup/RegisterPage';
import ProfilesPage from './pages/profiles/ProfilesPage';
// import ClientProfilePage from './pages/clients/ClientProfilePage';
import {Constants}  from './utilities/Constants'
import EditEmployeeProfile from './pages/profiles/EditEmployeeProfile';
import ComingSoon from './pages/ComingSoon';
import SelfBidPage from './pages/selfBid/SelfBidPage';
import About from './pages/about/About';
import NotFound from './NotFound';
import ContactPage from './pages/contact/ContactPage';

// import WorkOrderRequest from './pages/admin/customer_data/workorders/WorkOrderRequest';
import WorkOrderForm from './components/forms/WorkOrderForm';
import AdminEditCategory from './pages/admin/category_data/AdminEditCategory';
import Testing from './pages/admin/admin_components/drop-down-list/Testing';
// import AllOpenOrdersThatNeedSceduled from './pages/admin/customer_data/workorders/AllOpenOrdersThatNeedSceduled';
// import UnderConstruction from './pages/UnderConstruction';



function App() {
//  const [isAdmin, setIsAdmin] = (false);

const location = useLocation()
  
const [ authState, setAuthState ] = useState({userName: "", id: 0, status: false})
// const [ isAdmin, setIsAdmin ] = useState(false)
const [ id, setId ] =useState("")

useEffect(() => {
    axios.get(`${Constants.url.API_AUTH}`, {
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      if (response.data.error) {
        setAuthState({...authState, status: false});
      } else {
        setAuthState({
          userName: response.data.userName, 
          id: response.data.id, 
          status: true
        });
        setId(id)
      }
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>

        {/* As long as the pathname is not equal to the pathnames below, then display the header, else the header doesn't display */}
      {location.pathname === "/login" || location.pathname === "/sign-up" ||
       location.pathname === "/dashboard" || location.pathname === "/dashboard/clients" || 
       location.pathname === "/dashboard/create-client" || location.pathname === "/dashboard/employees" ||
       location.pathname === "/dashboard/admin/create/employee" || location.pathname === "/dashboard/admin/categories" ||
       location.pathname === "/dashboard/admin/create/category" || location.pathname === "/dashboard/admin/edit/category/:category_id" ||
       location.pathname === "/dashboard/admin/category/1" || location.pathname === "/dashboard/admin/category/:category_id"
       ? ( "" ) : ( <Header /> )}



        

      <Routes>

      <Route path="/test" element={<Testing />} />



      {/* Login or register pages, will eventually check by client and employee ID */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      {/* visitor facing */}
        <Route path="/" element={<HomePage />} />
         {/* <Route path="/categories" element={<CategoryPage />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<CategoryPage />} />

        {/* <Route path="/services/:service_id" element={<CategoryPage />} /> */}
        {/* <Route path="/lawn" element={<Lawns />} /> */}
        <Route path="/lawns" element={<ComingSoon /> } />
        {/* <Route path="/fertilizer" element={<FertilizerPage />} /> */}
        <Route path="/fertilizer" element={<ComingSoon />} />
        <Route path="/shrub-garden" element={<ComingSoon />} />
        <Route path="/snow" element={<ComingSoon />} />
        <Route path="/estimates" element={<SelfBidPage />} />
        <Route path='/contact-us' element={<ContactPage />} />

        
        

      {/* client and employee profiles. Will eventually sort by DB id numbers with employees as even and clients odd with admin having 1-10 */}
        {authState.id % 2 || authState.id === 4  ? 
        <>
          <Route path="/profile/:username" element={<EmployeeProfile />}/> 
          <Route path="/profile/:username/:id" element={<EditEmployeeProfile />} />
        </> 
        : 
        // <Route path="/profile/:username" element={<ClientProfilePage />} 
        <Route path="/profile/:username" element={<ProfilesPage />} 
        /> }
        
     
{/* profiles */}
        {/* <Route path="/profile" element={<EmployeeProfile />} /> */}




{/* ADMIN Access */}

{authState.id === 1 || authState.id === 4 ? <Route path="/dashboard" element={<Dashboard />} /> : <Route path="/" element={<HomePage />} />   }
{/* {authState.id === 1 || authState.id === 4 ? <Route path="/dashboard/*" element={<Dashboard />} /> : <Route path="/" element={<HomePage />} />   } */}
{/* {authState.id === 4 &&  <Route path="/dashboard" element={<Dashboard />} />  } */}

{/* Main dashboard  */}
  <Route path="/dashboard" element={<Dashboard />} />

{/* Testing Routes  */}
  <Route path="/dashboard/four" element={<Dashboard />} />
  <Route path="/dashboard/five" element={<Dashboard />} />
  <Route path="/dashboard/six" element={<Dashboard />} />
  <Route path="/dashboard/toggle" element={<Dashboard />} />
  <Route path="/dashboard/invoice" element={<Dashboard />} />
  <Route path="/dashboard/checkbox" element={<Dashboard />} />
  <Route path="/dashboard/profit-loss" element={<Dashboard />} />

{/* Client Dashboards  */}
  <Route path="/dashboard/clients" element={<Dashboard />} />
  <Route path="/dashboard/create-client" element={<Dashboard />} />

  <Route path="/admin/edit/customer/:customer_id" element={<AdminEditCustomerPage />} />
  <Route path="/admin/customer/:customer_id" element={<AdminCustomerPage />} />

  <Route path="/admin/customer/:customer_id/create-work-order/:customer_id" element={<WorkOrderForm />} />

{/* Invoice Dashboards  */}
  <Route path="/admin/customer/invoice/:customer_id" element={<AdminCustomerInvoicePage />} />

{/* Employee Dashboards  */}
  <Route path="/dashboard/employees" element={<Dashboard />} />
  <Route path="/dashboard/admin/create/employee" element={<Dashboard />} />
  <Route path="/admin/employees" element={<AdminEmployeesPage />} />
  <Route path="/admin/employee/:employee_id" element={<AdminEmployeePage />} />

  <Route path="/admin/edit/employee/:employee_id" element={<AdminEditEmployeePage />} />

{/* Order Dashboards  */}
  <Route path="/dashboard/all-open-orders" element={<Dashboard />} />
        
{/* Service Dashboards */}
        <Route path="/dashboard/admin/services" element={<AdminServicesPage />} />
        <Route path="/dashboard/admin/service/:service_id" element={<AdminServicePage />} />
        <Route path="/dashboard/admin/create/service" element={<AdminAddServicePage />} />
        <Route
          path="/admin/edit/service/:service_id"
          element={<AdminEditServicePage />}
        />

{/* Category Dashboards */}
        <Route path="/dashboard/admin/categories" element={<AdminCategoriesPage />} />
        <Route path="/dashboard/admin/create/category" element={<AdminAddCategory />} />
        <Route path="/dashboard/admin/category/:category_id" element={<AdminCategoryPage />} />
        <Route path="/dashboard/admin/edit/category/:category_id" element={<AdminEditCategory />} />

        
        
        



{/* 404 error page  */}
        <Route path="*" element={<NotFound />} />
  
      </Routes>
      {/* <Footer /> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
