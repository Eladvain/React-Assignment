
import { useEffect, useState } from 'react';
// import './App.css';
import FavoritesList from './components/FavoritesList';
import Generator from './components/Generator';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {

  //owLLZwZuDeEKnwopzwu/Kg==HzsOvXEmeB5EHPfR

  const [quote, setQuote] = useState({});
  const [favouriteQuotes, setFavouriteQuotes] = useState([]);
  const [quotesBySearch, setQuoteBySearch] = useState([]);
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
    console.log("in getFavoritesByNameAuthor")
    let newFavorites;
    let quotes1 = [];
    if(favouriteQuotes.length > 0)
    {
        favouriteQuotes.map((favorite, index)=>{
        console.log("favorite movie = "+JSON.stringify(favorite));
        if(favorite['author'].includes(searchValue)){
          console.log("search value inludessss")
          quotes1.push(favorite);
        }
          
      })
       console.log("newFavorites = "+JSON.stringify(quotes1));
       const newFavouriteList = [...quotes1];
        setQuoteBySearch(quotes1);
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
      <div className='headline'>
        <Header header = {"Abra Test"}/>
      </div>
      <Generator quoteData = {quote} addToFavourite = {addQuoteToFavourites} getNewRandomQuote = {getRandomQuote} />
      <Header header = {"Favorites Quotes List"}/>
      <SearchBar getFavorites = {getFavoritesByNameAuthor} serchValue = {searchTerm} setSearchValue = {setSearchTerm}/>
      <FavoritesList favoritesQuates = {favouriteQuotes} searchValue = {searchTerm} quotesBySearchValue = {quotesBySearch}/>
    </div>
  );
}

export default App;
