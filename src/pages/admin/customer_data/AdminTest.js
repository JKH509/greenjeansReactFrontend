import Axios from 'axios'
import React, {useState} from 'react'

const AdminTest = () => {

 
  const [entryOne, setEntryOne] = useState('')
  const [entryTwo, setEntryTwo] = useState('')
  const [dataList, setDataList] = useState([]);

  const getEmployees = () => {
    Axios.get('http://localhost:5001/api/wiki').then((response) => {
      console.log(response.data)
      setDataList(response.data)
    });
  };

  const addEmployee = () => {
    Axios.post('http://localhost:5001/api/wiki/add', {
      entryOne: entryOne, 
      entryTwo: entryTwo, 
    }).then(() => setDataList([...dataList, {
      entryOne: entryOne, 
      entryTwo: entryTwo,  
    }]))
  }

  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:5001/api/wiki/edit', {
      id: id, entryTwo: entryTwo
    }).then((response) => {
      setDataList(dataList.map((employee)=> {
        return employee.id === id ? {
          id: employee.id, entryOne: employee.entryOne,  entryTwo: employee.entryTwo
        } : employee
      }))
    })
  }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:5001/api/wiki/delete/${id}`).then((response) =>{
      setDataList(dataList.filter((employee) => {
        return employee.id !== id
      }))
    })
  }




  return (
    <div>
      This is the test page
      <div>
        {/* <input name='id' id='id' type='number' value='3' /> */}
      <div >
        <input name='entryOne' id="entryOne" type='text'  onChange={(e) =>  {setEntryOne(e.target.value)}}/>
      </div>
      <div >
      <input name='entryTwo' id='entryTwo' type='text'    onChange={(e) => {setEntryTwo(e.target.value)}} />
      </div>
      
          <button onClick={addEmployee}>Submit button</button>

      </div>
      <div>
      <h2>Show employees <button onClick={getEmployees}>Show</button></h2>
      </div>


      {dataList.map((employee, key) => {
  return (
    <div style={{backgroundColor:'lightgray', margin:'20px', padding:'20px', width:'40%'}}>
      <h3>{employee.value1} {employee.value2}</h3>
      <p>ID is: {employee.id}</p>
      <div>
        {/* <input type="text" placeholder="20.59" onChange={(e) => {setNewWage(e.target.value);}} /> */}
        <button onClick={() => {updateEmployeeWage(employee.id)}} >Update wage</button>
        </div>
        <div>
        {/* <input type="text" placeholder="20.59" onChange={(e) => {setNewWage(e.target.value);}} /> */}
        <button onClick={() => {deleteEmployee(employee.id)}} >Delete</button>
        </div>
      </div>
  )
})}
    </div>
  )
}

export default AdminTest
