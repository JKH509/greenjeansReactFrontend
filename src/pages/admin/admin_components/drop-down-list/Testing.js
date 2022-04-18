import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Constants } from '../../../../utilities/Constants'
import CategorySelector from '../../admin_components/drop-down-list/CategorySelector'

const Testing = () => {

  // const [ categoryList, setCategoryList ] = useState([])
  const [ selection, setSelection ] = useState([])

  // const pullData =(dataPulled) => {
  //   console.log(dataPulled.category_id)
  //   console.log(dataPulled.category_name)
  // }
  return (
    <div className='container'>
      <p>Hello</p>
      {/* <CategorySelector   /> */}
      {/* <CategorySelector  dataPush={pullData} /> */}
     
      <div>
        Select
  
      </div>
    </div>
  )
}

export default Testing