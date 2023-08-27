import React from 'react'
import Favorite from './Favorite'
import Header from './Header'

const FavoritesList = ({favoritesQuates, searchValue, quotesBySearchValue}) => {
  return (
    <div>
      {searchValue === "" ? (
      favoritesQuates.map((quote, index)=>(
        <Favorite quoteItem ={quote} key = {index}  />
      ))) : (
      quotesBySearchValue.map((quote, index)=>(
        <Favorite quoteItem ={quote} key = {index}  />
      )))
      }
    </div>
  )
  
}

export default FavoritesList
