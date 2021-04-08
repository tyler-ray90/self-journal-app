import {useState, useEffect } from "react";
import {fetchJournalData} from './services/journalService';
import './App.css';

function App () {

const [ journals, setJournals ] = useState([]);

const [ journalState, setJournalState ] = useState([]);


async function getAppData() {
  if(!journalState.user) return;
  try {
    const BASE_URL = 'http://localhost:3001/api/journal';
    const journal = await fetch(BASE_URL).then(res => res.json());
    setJournals((prevState) => ({
      ...prevState,
      journals,
    }));
  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  getAppData();
}, []); 

return (
  <div className="App">
    <header className="App-header">
      Self-Journal
      testings2111
      Testing
    </header>
  </div>
);
}




export default App;
