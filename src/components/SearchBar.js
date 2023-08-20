import React from 'react'
import { useState , useEffect} from 'react';

const SearchBar = ({getFavorites}) => {

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async()=>{

    getFavorites(searchTerm);

 },[searchTerm])

  return (
    <div>
      <div className="search">
        <input 
          type="search" 
          placeholder='search..' 
          id='search' 
          value= {searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        /> 
      </div>
    </div>
  )
}

export default SearchBar
