import React from 'react'
import { useNavigate } from "react-router";

const CancelButton = () => {
  let navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Cancel
    </button>
  );
}

export default CancelButton