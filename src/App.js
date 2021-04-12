import {useState, useEffect } from "react";
import {fetchJournalData} from './services/journalService';
import './App.css';
import { quoteAPI } from './services/utilities';

import Quote from '../src/components/quote/quote';
import Footer from '../src/components/footer/footer';
import Form from '../src/components/Form/Form';

function App () {

const [ journals, setJournals ] = useState([]);

const [ journalState, setJournalState ] = useState([]);

const [ apiState, setApiState ] = useState({});

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

async function getQuoteData() {
  const data = await quoteAPI();
  setApiState(data);
  console.log(data);

}

useEffect(() => {
  getAppData();
  getQuoteData();
}, []); 

return (

  <div className="App">
    <header className="App-header">
      <h1>Self-Journal</h1>
      <div>Welcome, User</div>
      <div>Login</div>
    </header>
    <main className="main">
      <h1>Accomplish more with Self Journal</h1>
      <Quote apiState={apiState}/>
      <Form />
      <Footer />
    </main>
  </div>
);
}




export default App;
