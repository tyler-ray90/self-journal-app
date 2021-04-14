import { Link } from 'react-router-dom';
import '../../App.css';


function FormPage(props) {
  return (
    <>
    <Link className="btn btn-default" to="/">Home Page</Link>
    <br/>
    <Link className="btn btn-default" to="/library">Library Page</Link>
    <div>This is the Form page</div>
    <br/>
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
    </>
  );
}



export default FormPage;