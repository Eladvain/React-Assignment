import React from 'react'
import generator from '../CSS/generator.css'

const Generator = ({quoteData, addToFavourite, getNewRandomQuote}) => {

  const addTo = async ()=>{
    addToFavourite(quoteData);
  }
  const newRandom = async ()=>{
    console.log("in newRandom")
    await getNewRandomQuote();
  }

  // console.log("in generator = "+JSON.stringify(quoteData))
  return (
    <div className='generator-part'>
      <div className='description'>
      <label className='label'>quote : </label>
      <p>{quoteData.quote}</p>
      <br/>
      <label className='label'>Author :  </label>
      <p>{quoteData.author} </p>
      <label className='label'>Category : </label>
      <p>{quoteData.category}</p>
      </div>
      <div className='buttons'>
        <button className='button' onClick={addTo}>Like!</button>
        <button className='button' onClick={newRandom}>New Quote!</button>
      </div>
    </div>
  )
}

export default Generator
