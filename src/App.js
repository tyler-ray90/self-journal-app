import {useState, useEffect } from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { quoteAPI } from './services/utilities';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from '../src/pages/HomePage/HomePage';
import FormPage from './pages/FormPage/FormPage';
import ViewPage from './pages/View/ViewPage';
import Library from './pages/Library/Library';

import { auth } from '../src/services/Firebase';

export default function App() {

const [ journals, setJournals ] = useState({
  user: null,
  journals: [{ feeling: "", goal: "", grateful: "", journalEntry: "",}],
  newJournal: {
    feeling: "",
    goal: "",
    grateful: "",
    journalEntry: "",
  },
});

const [ apiState, setApiState ] = useState({});

async function getAppData() {
  const BASE_URL = 'https://self-journal-app.herokuapp.com/api/journal';
  const journals = await fetch(BASE_URL).then(res => res.json());
    setJournals((prevState) => ({
      ...prevState,
      journals,
    }));
}

async function getQuoteData() {
  const data = await quoteAPI();
  setApiState(data);
  console.log(data);

}

async function addJournal(e) {
  if(!journals.user) return;
  e.preventDefault();

  
  const BASE_URL = 'https://self-journal-app.herokuapp.com/api/journal';
  
  const journal = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(journals.newJournal)
  }).then(res => res.json());

  setJournals((prevState) => ({
    journals: [...prevState.journals, journal],
    newJournal: {
    feeling: "",
    goal: "",
    grateful: "",
    journalEntry: "",
    },
  }));
}

function handleChange(e) {
  setJournals((prevState) => ({
    ...prevState,
    newJournal: {
      ...prevState.newJournal,
      [e.target.name]: e.target.value
    },
  }));
}

useEffect(() => {
  getAppData();
  getQuoteData();

  const cancelSubscription = auth.onAuthStateChanged(user => {
    if(user) {
      setJournals(prevState => ({
        ...prevState,
        user,
      }));
    } else {
      setJournals(prevState => ({
        ...prevState,
        user: null
      }));
    }
  })

  return function() {
    cancelSubscription();
  }

}, []); 

return (
  <div className="App">
    <header className="App-header">
    <Header user={journals.user}/>
    </header>
    <Switch>
    <Route exact path = "/" render={(props) => 
    <HomePage 
      apiState={apiState}
    />
    } />
    <Route exact path = "/form" render={(props) =>
    <FormPage 
    handleChange={handleChange}
    addJournal={addJournal}
    getAppData={getQuoteData}
    journals={journals}
    setJournals={setJournals}
    />
  }/>
    <Route exact path = "/library" render={(props) => 
    <Library 
    user={journals.user}
    handleChange={handleChange}
    addJournal={addJournal}
    getAppData={getQuoteData}
    journals={journals}
    setJournals={setJournals}
    />
  }/>
  <Route exact path = "/view/:id" render={(props) => 
  <ViewPage 
    handleChange={handleChange}
    addJournal={addJournal}
    getAppData={getQuoteData}
    journals={journals}
    setJournals={setJournals}
    {...props}
  />
  }/>
  </Switch>
    <Footer />
  </div>
);
}
