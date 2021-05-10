import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import Opis from './opis'

const App = () => {
  //items je to sto povlacimo sa api-a a setitems je funkcija koja nesto radi
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(true)

  useEffect(async () => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)


      console.log(result.data);



      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])


  return (
    <Router>
      <div className="container">
        <Header />


        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/opis">About</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/opis">
            <Opis />
          </Route>
       
          <Route path="/">
          <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
          </Route>
        </Switch>
      </div>
    </Router>

        
      </div>

    </Router>

  );
}

export default App;
// render(){
//   return (
//     <Router>
//         <div className="App" style={this.state}>
//           <header className="App-header">
//             <div className="App-content">
//               <Menu />
//               <Switch>
//                 <Route path="/details">
//                   <Details state={this.state}/>
//                 </Route>
//                 <Route path="/dashboard">
//                   <Content changeBackground={this.changeBackground} changeOfficialTitle={this.changeOfficialTitle}/>
//                 </Route>
//                 <Route path="/">
//                   <Content changeBackground={this.changeBackground} changeOfficialTitle={this.changeOfficialTitle}/>
//                 </Route>
//               </Switch>
//             </div>
//           </header>
//         </div>
//     </Router>
//   );