import {  useState, useContext } from 'react'
// import axios from 'axios'
// import { API_BASE_URL } from '../../utilities/Constants'
import { AuthContext } from '../../helpers/AuthContext';
// import { Link } from 'react-router-dom';

// import { ChevronLeftIcon, FilterIcon, MailIcon, PhoneIcon, SearchIcon } from '@heroicons/react/solid'
import {  MailIcon, PhoneIcon  } from '@heroicons/react/solid'

const profile = {
  name: 'Ricardo Cooper',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  coverImageUrl:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    Phone: '(555) 123-4567',
    Email: 'ricardocooper@example.com',
    Title: 'Landscape Lead',
    Team: 'North East Landscape',
    Location: 'Spokane',
    Address: 'PO BOX 321',
    hourly_wage: '$22.50',
    Birthday: 'June 8, 1990',
  },
}
const tabs = [
  { name: 'Profile', href: '#', current: true },
  { name: 'Hours', href: '#', current: false },
  { name: 'Schedule', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Messages', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const EmployeeProfile = () => {
  const authState = useContext(AuthContext)
  


  const [ employee ] = useState(authState.authState)

  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("");


  // const saveFile = (e) => {
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);
  // };
  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   try {
  //     const res = await axios.post('https://node.greenjeans509.com/upload', formData);
  //     // console.log(res);
  //   } catch (ex) {
  //     // console.log(ex);
  //   }
  // };

  return (
    /* // <form method="POST" action="/profile-upload-single" enctype="multipart/form-data" >
  //         <input type="file" onChange={} />
  //         <button onClick={}>Upload</button>
  // </form> */

    //   <form method="POST" action="/profile-upload-single" encType="multipart/form-data">
    //     <h1>Employees profile page</h1>
    //   <div>
    //       <label>Upload profile picture</label>
    //       <input type="file" name="profile-file" required />
    //   </div>
    //   <div>
    //       <input type="submit" value="Upload" />
    //   </div>
    // </form>

//     <div className="container lg:mt-5">

// <div class="grid grid-cols-3 gap-4">
//   <div>Image</div>
//   <div>{employee.userName}</div>
// </div>

// <div class="grid grid-cols-6 gap-4">
//   <div class="col-start-2 col-span-4 ...">Background image could go here</div>
//   <div class="col-start-1 col-end-3 ...">profile image</div>
//   <div class="col-end-7 col-span-2 ...">name</div>
//   <div class="col-start-1 col-end-7 ...">04</div>
// </div>

//       <small>
//         Eventually the employee will be able to create their own profile based
//         on their email and uuid that is created when the employee is created
//       </small>
//       <br />
      
//       <div>
//         <Link to={`/profile/${employee.userName}/${employee.id}`}>
//           Edit your profile
//         </Link>
//       </div>
//     </div>


<article>
{/* Profile header */}
<div>
  <div>
    <img className="h-32 w-full object-cover lg:h-48" src={profile.coverImageUrl} alt="" />
  </div>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
      <div className="flex">
        <img
          className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
          src={profile.imageUrl}
          alt=""
        />
      </div>
      <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
        <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">{employee.userName}</h1>
        </div>
        <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Message</span>
          </button>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
      <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}{employee.userName}</h1>
    </div>
  </div>
</div>

{/* Tabs */}
<div className="mt-6 sm:mt-2 2xl:mt-5">
  <div className="border-b border-gray-200">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              tab.current
                ? 'border-pink-500 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
  </div>
</div>

{/* Description list */}
<div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    {Object.keys(profile.fields).map((field) => (
      <div key={field} className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">{field}</dt>
        <dd className="mt-1 text-sm text-gray-900">{profile.fields[field]}</dd>
      </div>
    ))}
    <div className="sm:col-span-2">
      <dt className="text-sm font-medium text-gray-500">About</dt>
      <dd
        className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
        dangerouslySetInnerHTML={{ __html: profile.about }}
      />
    </div>
  </dl>
</div>

{/* Team member list */}
{/* <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
  <h2 className="text-sm font-medium text-gray-500">Team members</h2>
  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
    {team.map((person) => (
      <div
        key={person.handle}
        className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
      >
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <a href="#" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500 truncate">{person.role}</p>
          </a>
        </div>
      </div>
    ))}
  </div>
</div> */}
</article>


  );
};

export default EmployeeProfile
