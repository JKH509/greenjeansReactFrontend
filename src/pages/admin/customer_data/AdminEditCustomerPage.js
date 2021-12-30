import React from 'react'
import { useParams } from 'react-router'

const AdminEditCustomerPage = () => {
const {Customer_ID} = useParams();

// useEffect(() => {
//   async function fetchData() {
//     const request = await axios.get(`http://localhost:5001/api/customer/${Customer_ID}`)
//     setCustomer(request.data[0])
//     console.log(request.data[0])
//     return request;
//   }
//   fetchData()
// }, [])

  return (
    <div>
      Edit customer page
    </div>
  )
}

export default AdminEditCustomerPage
