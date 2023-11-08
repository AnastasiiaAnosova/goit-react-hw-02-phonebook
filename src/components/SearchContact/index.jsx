// import React from 'react'

const SearchBar = ({ filter, handleSearchChange }) => {

  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;








// const SearchContact = ({searchContact}) => {
// 	const handleSearchChange = ({ target: { value } }) => {
// 		searchContact(value);
// 	}

//   return (
// 	  <div>
// 		  <label>Find contacts by name</label>
// 		  <input
// 			type="text"
//         	onChange={handleSearchChange}
//         />
//    </div>
//   )
// }

// export default SearchContact
