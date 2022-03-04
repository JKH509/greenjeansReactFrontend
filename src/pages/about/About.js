import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Constants } from '../../utilities/Constants';

const About = () => {
  const [ meta, setMeta ] = useState('')

  useEffect(() => {
    axios.get(`${Constants.url.API_URL1}/about`)
    // axios.get(`${Constants.url.API_AUTH}`)
    .then((response) => {
     console.log(response)
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div className='container text-center'>
      <h1 className='self-align-center'>About Page Coming Soon</h1>
  </div>
  )
}

export default About