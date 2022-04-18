import React from 'react'

const SearchBar = ({onChange, placeholder}) => {
  // const SearchBar = ({ filteredPersons }) => {



    // const filtered = filteredPersons.map(person =>  <SearchBar key={person.id} person={person} />); 
    return (
      // <div>
      //   {filtered}
      // </div>



    <div className="Search">
      <span className="SearchSpan">
        {/* <FaSearch /> */}
      </span>
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchBar