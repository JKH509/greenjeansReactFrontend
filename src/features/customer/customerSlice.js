import { createSlice } from '@reduxjs/toolkit';

const initialState = [];



const customerSlice = createSlice ({
  name:"customers",
  initialState,
  reducers:{
    customerAdded(state, action){
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

export const { customerAdded, customerDelete } = customerSlice.actions;

export default customerSlice.reducer;