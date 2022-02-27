import { createSlice } from '@reduxjs/toolkit';

const initialState = {};



const customerSlice = createSlice ({
  name:"customers",
  initialState,
  reducers:{
    addCustomer(state, action){
      state.push(action.payload)
  },
    customerDelete(state, action){
    return state.filter(Customer => Customer.Customer_ID !== action.payload);
    },
  }
})
// export const customerCount = state => state.customers.value;
// export const customerList = state => state.customers.value;
export const customerList = state => state.customers

export const { addCustomer, customerDelete } = customerSlice.actions;

export default customerSlice.reducer;