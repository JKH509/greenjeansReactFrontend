

const development = {
  url: {
    API_URL: 'http://localhost:5001',

    // AUTH 
    API_AUTH: 'http://localhost:5001/api/auth',

    // LOGIN 
    API_GET_LOGIN: 'http://localhost:5001/api/login',

    // REGISTER 
    API_REGISTER: 'http://localhost:5001/api/register',

   //  CUSTOMERS 
    API_GET_ALL_CUSTOMERS: 'http://localhost:5001/api/customers/list',
    API_ADD_CUSTOMER: 'http://localhost:5001/api/customer/add-customer',
    API_GET_CUSTOMER_BY_ID: 'http://localhost:5001/api/customer',
    API_EDIT_CUSTOMER_BY_ID: 'http://localhost:5001/api/customer/edit',
 
   //  INVOICES
   
   // EMPLOYEES 
    API_GET_ALL_EMPLOYEES: 'http://localhost:5001/api/employees/list',
    API_ADD_EMPLOYEE: 'http://localhost:5001/api/employee/add-employee',
    API_EDIT_EMPLOYEE_BY_ID: 'http://localhost:5001/api/employee/edit',
    API_DELETE_EMPLOYEE: 'http://localhost:5001/api/employee/delete',
    API_EMPLOYEE_BY_ID: 'http://localhost:5001/api/employee',
    
   // SERVICES 
    API_GET_ALL_SERVICES: 'http://localhost:5001/api/services/list',
    API_ADD_SERVICE: 'http://localhost:5001/api/service/add-service',
    API_EDIT_SERVICE_BY_ID: 'http://localhost:5001/api/service/edit',
    API_DELETE_SERVICE: 'http://localhost:5001/api/service/delete',
    API_SERVICE_BY_ID: 'http://localhost:5001/api/service',
 
   // CATEGORIES 
   API_GET_ALL_CATEGORIES: 'http://localhost:5001/api/categories/list',
    API_ADD_CATEGORY: 'http://localhost:5001/api/category/add-category',
    API_EDIT_CATEGORY_BY_ID: 'http://localhost:5001/api/category/edit',
    API_DELETE_CATEGORY: 'http://localhost:5001/api/category/delete',
    API_CATEGORY_BY_ID: 'http://localhost:5001/api/category',
  
   }
}

const production = {
  url: {
    API_URL: 'https://node.greenjeans509.com',

    // AUTH 
    API_AUTH: 'https://node.greenjeans509.com/api/auth',

    // LOGIN 
    API_GET_LOGIN: 'https://node.greenjeans509.com/api/login',

    // REGISTER 
    API_REGISTER: 'https://node.greenjeans509.com/api/register',

   //  CUSTOMERS 
    API_GET_ALL_CUSTOMERS: 'https://node.greenjeans509.com/api/customers/list',
    API_ADD_CUSTOMER: 'https://node.greenjeans509.com/api/customer/add-customer',
    API_GET_CUSTOMER_BY_ID: 'https://node.greenjeans509.com/api/customer',
    API_EDIT_CUSTOMER_BY_ID: 'https://node.greenjeans509.com/api/customer/edit',
 
   //  INVOICES
   
   // EMPLOYEES 
    API_GET_ALL_EMPLOYEES: 'https://node.greenjeans509.com/api/employees/list',
    API_ADD_EMPLOYEE: 'https://node.greenjeans509.com/api/employee/add-employee',
    API_EDIT_EMPLOYEE_BY_ID: 'https://node.greenjeans509.com/api/employee/edit',
    API_DELETE_EMPLOYEE: 'https://node.greenjeans509.com/api/employee/delete',
    API_EMPLOYEE_BY_ID: 'https://node.greenjeans509.com/api/employee',
    
   // SERVICES 
    API_GET_ALL_SERVICES: 'https://node.greenjeans509.com/api/services/list',
    API_ADD_SERVICE: 'https://node.greenjeans509.com/api/service/add-service',
    API_EDIT_SERVICE_BY_ID: 'https://node.greenjeans509.com/api/service/edit',
    API_DELETE_SERVICE: 'https://node.greenjeans509.com/api/service/delete',
    API_SERVICE_BY_ID: 'https://node.greenjeans509.com/api/service',
 
   // CATEGORIES 
   API_GET_ALL_CATEGORIES: 'https://node.greenjeans509.com/api/categories/list',
    API_ADD_CATEGORY: 'https://node.greenjeans509.com/api/category/add-category',
    API_EDIT_CATEGORY_BY_ID: 'https://node.greenjeans509.com/api/category/edit',
    API_DELETE_CATEGORY: 'https://node.greenjeans509.com/api/category/delete',
    API_CATEGORY_BY_ID: 'https://node.greenjeans509.com/api/category',
  
   }
 };

export const Constants = process.env.NODE_ENV === 'development' ?  development : production;
