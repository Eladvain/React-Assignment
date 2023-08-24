import React from 'react'
import { useState , useEffect} from 'react';

const SearchBar = ({getFavorites, searchValue, setSearchValue}) => {

  // const [searchTerm, setSearchTerm] = useState("");

//   useEffect(async()=>{

//     getFavorites(searchTerm);

//  },[searchTerm])

  return (
    <div>
      <div className="search">
        <input 
          type="search" 
          placeholder='search..' 
          id='search' 
          value= {searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
        /> 
      </div>
    </div>
  )
}

export default SearchBar
