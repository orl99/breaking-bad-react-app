import React, { useEffect, useState } from 'react';
import './App.css';

// Models
import { CharactersI } from './models/characters.model';

// Services
import {getCharacters, getCharactersByQuery} from './services/app.services';
// Components
import HeaderComponent from './components/layout/header-component/header.component'
import CharactersGrid from './components/characters/characters-grid-component/CharactersGrid.component';
import SearchCaracters from './components/characters/search-caracters-component/SearchCaracters.component';
const App = () => {
  // Hooks
  const [items, setItems] = useState<CharactersI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [queryItems, setQueryItems] = useState<string>();
  
  useEffect( () => {
    allCharacters();
  }, []);

  // Functions
  const allCharacters = async () => {
    const allCharactersData = await getCharacters()
    console.log('allChareacters', allCharactersData);
    setItems(allCharactersData);
    setIsLoading(false);
    console.log('items hooks', items);
  };

  const setQueryItemsFunc = async (query: string) => {
    if (query.length > 0) {
      const response = await getCharactersByQuery(query);
      console.log('setQueryItems', response);
      setItems(response);
    } else {
      allCharacters();
    }
  }

  return (
    <div className="container">
      <div className="center">
        <HeaderComponent/>
      </div>
      <SearchCaracters getQuery={(q: string) => setQueryItemsFunc(q)} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
