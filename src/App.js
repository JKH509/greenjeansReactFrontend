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
import Lawns from './pages/services/lawn/Lawns';
import FertilizerPage from './pages/services/fertilizer/FertilizerPage';
import Snow from './pages/services/snow/Snow';
import AdminCategoriesPage from './pages/admin/category_data/AdminCategoriesPage';
import AdminAddCategory from './pages/admin/category_data/AdminAddCategory';
import AdminEditCategory from './pages/admin/category_data/AdminEditCategory';
import AdminCategoryPage from './pages/admin/category_data/AdminCategoryPage';
import CategoryPage from './pages/services/category/CategoryPage';
import LoginPage from './LoginSignup/LoginPage';
import RegisterPage from './LoginSignup/RegisterPage';
import ProfilesPage from './pages/profiles/ProfilesPage';
// import ClientProfilePage from './pages/clients/ClientProfilePage';
import {Constants}  from './utilities/Constants'



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
      {location.pathname === "/login" || location.pathname === "/sign-up" || location.pathname === "/dashboard" ? (
          ""
        ) : (
          <Header />
        )}
      <Routes>
{/* client facing */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {authState.id % 2 ? 
        <Route path="/profile/:username" element={<EmployeeProfile />}
        />  
        : 
        // <Route path="/profile/:username" element={<ClientProfilePage />} 
        <Route path="/profile/:username" element={<ProfilesPage />} 
        /> }
        
         {/* <Route path="/profile/:username" element={<ProfilesPage />} /> */}
        {/* This does work, I don't know if I should use this instead of the above?  */}
        
        {/* <Route path={`/profile/:${authState.userName}`} element={<ProfilesPage />} /> */}

        {/* <Route path="/client-profile" element={<ProfilesPage />} /> */}
        {/* <Route path="/client-profile" element={ authState.userName !== "James" ? <ClientProfilePage /> : <ProfilesPage /> } /> */}
        
        {/* {username === "James" && <Redirect to="/client-profile" />} */}
        {/* <Route path="/client-profile/:username" element={<ProfilesPage />} /> */}



        {/* <Route path="/categories" element={<CategoryPage />} /> */}
        <Route path="/services" element={<CategoryPage />} />
        {/* <Route path="/services/:service_id" element={<CategoryPage />} /> */}
        <Route path="/lawn" element={<Lawns />} />
        <Route path="/fertilizer" element={<FertilizerPage />} />
        <Route path="/snow" element={<Snow />} />

{/* profiles */}
        <Route path="/profile" element={<EmployeeProfile />} />


{/* admin facing */}
{authState.id !== 1 ?  <Route path="/dashboard" element={<Dashboard />} /> : <Route path="/" element={<HomePage />} /> }
        

{/* customers */}
{/* {isAdmin === true ? <Route path="/admin/customers" element={<AdminCustomersPage />} /> : '' } */}
 <Route path="/admin/customers" element={<AdminCustomersPage />} />
        

        {/* <Route path='/test' element={<AdminTest />} /> */}

        <Route
          path="/admin/customer/:customer_id"
          element={<AdminCustomerPage />}
        />
        <Route
          path="/admin/create/customer"
          element={<AdminAddCustomerPage />}
        />
        <Route
          path="/admin/edit/customer/:customer_id"
          element={<AdminEditCustomerPage />}
        />
        <Route
          path="/admin/customer/invoice/:customer_id"
          element={<AdminCustomerInvoicePage />}
        />

{/* employees */}
        <Route path="/admin/employees" element={<AdminEmployeesPage />} />
        <Route path="/admin/employee/:employee_id" element={<AdminEmployeePage />} />
        <Route
          path="/admin/create/employee"
          element={<AdminAddNewEmployeePage />}
        />
        <Route
          path="/admin/edit/employee/:employee_id"
          element={<AdminEditEmployeePage />}
        />

{/* services */}
        <Route path="/admin/services" element={<AdminServicesPage />} />
        <Route path="/admin/service/:service_id" element={<AdminServicePage />} />
        <Route path="/admin/create/service" element={<AdminAddServicePage />} />
        <Route
          path="/admin/edit/service/:service_id"
          element={<AdminEditServicePage />}
        />

{/* categories */}
        <Route path="/admin/categories" element={<AdminCategoriesPage />} />
        <Route path="/admin/category/:category_id" element={<AdminCategoryPage />} />
        <Route path="/admin/create/category" element={<AdminAddCategory />} />
        <Route path="/admin/edit/category/:category_id" element={<AdminEditCategory />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
