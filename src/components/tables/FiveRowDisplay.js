import React from 'react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const FiveRowDisplay = ({ people, personIdx, id, field1, field2, field3, field4, linkIs }) => {
  return (
    <tr key={personIdx}>
      <td
        className={classNames(
          personIdx !== people.length - 1 ? "border-b border-gray-200" : "",
          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
        )}
      >
        {field1}
      </td>
      <td
        className={classNames(
          personIdx !== people.length - 1 ? "border-b border-gray-200" : "",
          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
        )}
      >
        {field2}
      </td>
      <td
        className={classNames(
          personIdx !== people.length - 1 ? "border-b border-gray-200" : "",
          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
        )}
      >
        {field3}
      </td>
      <td
        className={classNames(
          personIdx !== people.length - 1 ? "border-b border-gray-200" : "",
          "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
        )}
      >
        {field4}
      </td>
      <td
        className={classNames(
          personIdx !== people.length - 1 ? "border-b border-gray-200" : "",
          "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"
        )}
      >
        {linkIs}
      </td>
    </tr>
  );
}

export default FiveRowDisplay