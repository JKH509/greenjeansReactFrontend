import * as actionTypes from "../constants/customerConstants";

export const getCustomersReducer = (state = { customers: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CUSTOMERS_REQUEST:
      return {
        loading: true,
        customers: [],
      };
    case actionTypes.GET_CUSTOMERS_SUCCESS:
      return {
        customers: action.payload,
        loading: false,
      };
    case actionTypes.GET_CUSTOMERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCustomerDetailsReducer = (state = { customer: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_CUSTOMER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_CUSTOMER_DETAILS_SUCCESS:
      return {
        loading: false,
        customer: action.payload,
      };
    case actionTypes.GET_CUSTOMER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_CUSTOMER_DETAILS_RESET:
      return {
        customer: {},
      };
    default:
      return state;
  }
};