import React from 'react'



const DayOfWeekRadio = (props) => {


  return (
    <div>
      <label className="text-base font-medium text-gray-900">Notifications</label>
      <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Day of week preference</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {props.Dows.map((dow) => (
            <div key={dow.id} className="flex items-center">
              <input
                id={props.id}
                name="notification-method"
                type="radio"
                defaultChecked={props.id === 'email'}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor={props.id} className="ml-3 block text-sm font-medium text-gray-700">
                {dow.title}
              </label>
            </div>
            
          ))}
          {console.log(props.title)}
        </div>
      </fieldset>
    </div>
  )
}

export default DayOfWeekRadio
