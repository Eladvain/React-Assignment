import React from 'react'

const Generator = ({quoteData, addToFavourite, getNewRandomQuote}) => {

  const addTo = async ()=>{
    addToFavourite(quoteData);
  }
  const newRandom = async ()=>{
    console.log("in newRandom")
    await getNewRandomQuote();
  }

  console.log("in generator = "+JSON.stringify(quoteData))
  return (
    <div className='generator-part'>
      <div className='description'>
      <label className='quote'>quote : {quoteData.quote}</label>
      <br/>
      <label>Author : {quoteData.author}, </label>
      <label>Category : {quoteData.category}</label>
      </div>
      <div className='buttons'>
        <button onClick={addTo}>Like!</button>
        <button onClick={newRandom}>New Quote!</button>
        

      </div>
    </div>
  )
}

export default Generator
