import React from 'react'
import Favorite from './Favorite'
import Header from './Header'

const FavoritesList = ({favoritesQuates}) => {
  return (
    <div>
      {favoritesQuates.map((quote, index)=>(
        <Favorite quoteItem ={quote} key = {index}  />
      ))}
    </div>
  )
}

export default FavoritesList
