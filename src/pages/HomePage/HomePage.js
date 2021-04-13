import Quote from '../../components/quote/quote';

import { Link } from 'react-router-dom';
import '../../App.css';


const HomePage = (props) => {
    return (
        <div className="App">
    <main className="main">
       <Link className="btn btn-default" to="/form">Journal Library</Link>
      <h1>Accomplish more with Self Journal</h1>
      <Quote apiState={props.apiState}/>
      <section>
      {/* <div>
        {journals.journals.map((j) => (
          <article key={j.journal}>
             <div>{j.feeling}</div>
             <div>{j.goal}</div>
          </article>
        ))}
      </div> */}
        <form onSubmit={props.addJournal}>
           <label className="feelings">
             <span>How do you feel?</span>
             <input 
               name="feeling"
               value={props.journals.newJournal.feeling}
               onChange={props.handleChange}
             />
           </label>
           <br/>
           <label className="goal">
            <span>Intentions/Achievments</span>
           <input
            name="goal"
            value={props.journals.newJournal.goal}
            onChange={props.handleChange}
           />
           </label>
           <br/>
           <label className="grateful">
            <span>What are you grateful for?</span>
           <input
            name="grateful"
            value={props.journals.newJournal.grateful}
            onChange={props.handleChange}
           />
           </label>
           <br/>
           <label className="journal-entry">
            <span>What's on your mind?</span>
           <input
            name="journalEntry"
            value={props.journals.newJournal.journalEntry}
            onChange={props.handleChange}
           />
           </label>
           <br/>
           <button>Add Journal</button>
          </form>

      </section>
    </main>
  </div>
    );
};


export default HomePage;