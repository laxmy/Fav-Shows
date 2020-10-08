import React,{ useEffect, useState} from 'react';
import Tabs from './components/Tabs/Tabs'
import Search from './components/Search/search'
import Favorites from './components/Favorites/Favorites'
import './App.css';

export const localStorageKey = "favorites"

function App() {

  const [fav, setFav] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || [])

  const removeFavorites = (show) => {
    let items = fav.filter(item => item.id !== show.id);
    setFav(items)
  }

  const addFavorites =(show) => {
    setFav(currFav => [...currFav,show])
  }

  useEffect(()=> {
    localStorage.setItem("favorites",JSON.stringify(fav))
},[fav])

 
  return (
    <div className="App">
      <header className="App-header">  
       <h5>Fav Show Tracker</h5>
      </header>
      <Tabs> 
          <div label="SEARCH"> 
             <Search onAddFavorites={addFavorites} currentFav={fav}/>
          </div> 
          <div label="FAVORITES"> 
            <Favorites onRemoveFavorites ={removeFavorites} currentFav={fav}/>
          </div> 
     </Tabs> 
    </div>
  );
}

export default App;
