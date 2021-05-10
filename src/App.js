import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/ui/header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';



const App = () => {
  //items je to sto povlacimo sa api-a a setitems je funkcija koja nesto radi
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(true)
  
  useEffect(async() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    

      console.log(result.data);

     

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
