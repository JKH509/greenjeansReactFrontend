import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ServicesPage from './pages/services/ServicesPage';
// import NotFound from './NotFound';
// import Footer from './shared/Footer';
import Header from './shared/Header'
import AdminServicePage from './pages/admin/service_data/AdminServicePage';
import EmployeeProfile from './pages/profiles/EmployeeProfile';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

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

        <Route path="/profile" element={<EmployeeProfile />} />



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

        <Route path="/admin/services" element={<AdminServicesPage />} />
        <Route path="/admin/service/:service_id" element={<AdminServicePage />} />
        <Route path="/admin/create/service" element={<AdminAddServicePage />} />
        <Route
          path="/admin/edit/service/:service_id"
          element={<AdminEditServicePage />}
        />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
