import {useState, useEffect } from "react";
import {fetchJournalData} from './services/journalService';
import './App.css';
import { quoteAPI } from './services/utilities';


import Quote from '../src/components/quote/quote';
import Footer from '../src/components/footer/footer';
import Form from '../src/components/Form/Form';

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

// const [ journalState, setJournalState ] = useState({});

const [ apiState, setApiState ] = useState({});

// async function getAppData() {
//   {
//     const BASE_URL = 'http://localhost:3001/api/journal';
//     // const journal = await fetch(BASE_URL).then(res => res.json());
//     setJournalState((prevState) => ({
//       ...prevState,
//       journals,
//     }));
//   }
// }

async function getAppData() {
  const BASE_URL = 'http://localhost:3001/api/journal';
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
  e.preventDefault();
  
  const BASE_URL = 'http://localhost:3001/api/journal';
  
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
      <section>
        
        {journals.journals.map((j) => (
          <article key={j.journal}>
            <div>{j.feeling}</div>
             <div>{j.goal}</div>
        </article>
        
        ))}
        <form onSubmit={addJournal}>
           <label>
             <span>Feelings</span>
             <input 
               name="feeling"
               value={journals.newJournal.feeling}
               onChange={handleChange}
             />
           </label>
           <br/>
           <label>
            <span>Intentions/Achievments</span>
           <input
            name="goal"
            value={journals.newJournal.goal}
            onChange={handleChange}
           />
           </label>
           <br/>
           <label>
            <span>What are you grateful for?</span>
           <input
            name="grateful"
            value={journals.newJournal.grateful}
            onChange={handleChange}
           />
           </label>
           <br/>
           <label>
            <span>What's on your mind?</span>
           <input
            name="journalEntry"
            value={journals.newJournal.journalEntry}
            onChange={handleChange}
           />
           </label>
           <button>Add Journal</button>
          </form>

      </section>
      {/* <Form /> */}
      <Footer />
    </main>
  </div>
);
}





