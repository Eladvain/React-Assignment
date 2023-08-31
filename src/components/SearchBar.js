import React from 'react'
import { useState , useEffect} from 'react';
import searchBar from '../CSS/searchBar.css'

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
          id='searchBar' 
          value= {searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
        /> 
      </div>
    </div>
  )
}

export default SearchBar
