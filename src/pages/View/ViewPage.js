function ViewPage(props) {
    return (
        <div className="view-container">
        <h1>This is the view page</h1>
        {props.journals.journals.map((j) => (
            <fieldset key={j.journal}>
             <p>How were you feeling: {j.feeling}</p>
             <br/>
             <p>Achievments/Intentions: {j.goal}</p>
             <br/>
             <p>What were you grateful for: {j.grateful}</p>
             <br/>
             <p>What was on your mind: {j.journalEntry}</p>
            </fieldset>
        ))}
        </div>
        
        
    );
}


export default ViewPage;