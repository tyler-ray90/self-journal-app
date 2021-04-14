


function Library(props) {
    
    return (
        <div className="library-container">
        {props.journals.journals.map((j) => (
            <fieldset key={j.journal}>
             <p>{j.createdAt ? j.createdAt.substr(0,10):null}</p>
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
};

export default Library;