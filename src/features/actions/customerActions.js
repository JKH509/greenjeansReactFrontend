import * as actionTypes from "../constants/productConstants";
import axios from "axios";
export const GET_CUSTOMER_LIST = "GET_CUSTOMER_LIST";

// export const getCustomers = () => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.GET_CUSTOMERS_REQUEST });

//     const { data } = await axios.get("http://localhost:5001/api/customer/list");

//     dispatch({
//       type: actionTypes.GET_CUSTOMERS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_CUSTOMERS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const getCustomerList = () => dispatch => {
  axios.get("http://localhost:5001/api/customer/list/").then(res => {
    dispatch({
      type: GET_CUSTOMER_LIST,
      payload: res.data
    });
    return res.data;
  });
};

export const getProductDetails = (Customer_ID) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CUSTOMER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/customer/${Customer_ID}`);

    dispatch({
      type: actionTypes.GET_CUSTOMER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CUSTOMER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeCustomerDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_CUSTOMER_DETAILS_RESET });
};
