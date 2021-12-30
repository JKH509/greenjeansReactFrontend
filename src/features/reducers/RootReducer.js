import { combineReducers } from "redux";

import customerReducer from "../customer/customerSlice";

const RootReducer = combineReducers({
  customers: customerReducer,
 
});

export default RootReducer;