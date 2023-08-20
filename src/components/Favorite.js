import React from 'react'
import Header from './Header'
import favoriteCss from '../CSS/favoriteQuote.css'

const Favorite = ({quoteItem}) => {
  return (
    <div className='fav-quote'>
      <label>author : {quoteItem.author}</label>
      <br/>
      <label>category : {quoteItem.category}</label>
      <br/>
      <label>quote : {quoteItem.quote}</label>

    </div>
  )
}

export default Favorite
