
import { useEffect, useState } from 'react';
import './App.css';
import FavoritesList from './components/FavoritesList';
import Generator from './components/Generator';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {

  //owLLZwZuDeEKnwopzwu/Kg==HzsOvXEmeB5EHPfR

  const [quote, setQuote] = useState({});
  const [favouriteQuotes, setFavouriteQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getRandomQuote()
  {
    let response;
    
    try {
      response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=happiness`, {
          method: 'GET',
          headers: {'X-Api-Key': 'owLLZwZuDeEKnwopzwu/Kg==HzsOvXEmeB5EHPfR'},
          contentType: 'application/json',
      });
  } catch (error) {
      console.log('error = ' + error);
  }
    
    let data = await response.json();
    setQuote(data[0]);
  }

  async function getFavoritesByNameAuthor(searchValue)
  {
    let newFavorites;
    if(favouriteQuotes.length > 0)
    {
       newFavorites = favouriteQuotes.map((favorite, index)=>{
        console.log("favorite movie = "+JSON.stringify(favorite));
        if(favorite.author.includes(searchTerm))
          return favorite;
        
      })
       console.log("newFavorites = "+JSON.stringify(newFavorites))
       const newFavouriteList = [...newFavorites];
       setFavouriteQuotes(newFavouriteList);
    }
    
    
  }

  useEffect(()=>{

    getRandomQuote();

  },[])

  useEffect(()=>{

    getFavoritesByNameAuthor(searchTerm);

 },[searchTerm])


  

  async function addQuoteToFavourites(newQuote)
  {
    const newFavouriteList = [...favouriteQuotes, newQuote];
    setFavouriteQuotes(newFavouriteList);
  }

  return (
    <div className="App">
      <Header header = {"Abra Test"}/>
      <Generator quoteData = {quote} addToFavourite = {addQuoteToFavourites} getNewRandomQuote = {getRandomQuote} />
      <Header header = {"Favorites Quotes List"}/>
      <SearchBar getFavorites = {getFavoritesByNameAuthor} serchValue = {searchTerm} setSearchValue = {setSearchTerm}/>
      <FavoritesList favoritesQuates = {favouriteQuotes} />
    </div>
  );
}

export default App;
