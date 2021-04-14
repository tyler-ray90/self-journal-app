import '../../App.css';
// import Button from 'react-bootstrap/Button';


function FormPage(props) {
  return (
    <div className="form-container">
    <form className="form" onSubmit={props.addJournal}>
           <label className="label">
             <span>How do you feel?</span>
             <input 
               name="feeling"
               value={props.journals.newJournal.feeling}
               onChange={props.handleChange}
             />
           </label>
           <br/>
           <label className="label">
            <span>Intentions/Achievments</span>
           <input
            name="goal"
            value={props.journals.newJournal.goal}
            onChange={props.handleChange}
           />
           </label>
           <br/>
           <label className="label">
            <span>What are you grateful for?</span>
           <input
            name="grateful"
            value={props.journals.newJournal.grateful}
            onChange={props.handleChange}
           />
           </label>
           <br/>
           <label className="label">
            <span>What's on your mind?</span>
           <textarea
            name="journalEntry"
            value={props.journals.newJournal.journalEntry}
            onChange={props.handleChange}
           />
           </label>
           <br/>
           <button>Add Journal</button>
          </form>
    </div>
  );
}



export default FormPage;