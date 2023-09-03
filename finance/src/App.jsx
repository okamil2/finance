import { useState } from 'react'
import './App.css'
import {SearchBar} from "./components/SearchBar";


function App() {

const [results, setResults] = useState ([]);
  
return (
   <div className='App'>
    <div className='search-bar-container'>
      <SearchBar setResults={setResults} />
      <div>searchresults</div>
    </div>

   </div>
  )
}

export default App
