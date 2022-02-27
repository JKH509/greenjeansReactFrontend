import {  useState } from 'react'
import axios from 'axios'
// import { API_BASE_URL } from '../../utilities/Constants'

const EmployeeProfile = () => {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");


  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post('https://node.greenjeans509.com/upload', formData);
      // console.log(res);
    } catch (ex) {
      // console.log(ex);
    }
  };

  return (
 
  /* // <form method="POST" action="/profile-upload-single" enctype="multipart/form-data" >
  //         <input type="file" onChange={} />
  //         <button onClick={}>Upload</button>
  // </form> */

  <form method="POST" action="/profile-upload-single" encType="multipart/form-data">
    <h1>Employees profile page</h1>
  <div>
      <label>Upload profile picture</label>
      <input type="file" name="profile-file" required />
  </div>
  <div>
      <input type="submit" value="Upload" />
  </div>
</form> 

  );
};

export default EmployeeProfile
