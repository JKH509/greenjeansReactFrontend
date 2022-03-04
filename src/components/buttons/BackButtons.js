import React from 'react'
import { useNavigate } from "react-router";

const BackButtons = () => {
  let navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default BackButtons