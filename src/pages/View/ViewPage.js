function ViewPage(props) {
    console.log(props.match.params.id);
    console.log(props.journals.journals);
    const result = props.journals.journals.filter(journal => journal._id === props.match.params.id)
    return (
        <div className="view-container">
        
        {result.map((j) => (
            <fieldset className="fieldset" key={j.journal}>
            <h2>Date: {j.createdAt ? j.createdAt.substr(0,10):null}</h2>
             <p>How were you feeling:</p>
             <p>{j.feeling}</p>
             <br/>
             <p>Achievments/Intentions:</p>
             <p>{j.goal}</p>
             <br/>
             <p>What were you grateful for:</p>
             <p>{j.grateful}</p>
             <br/>
             <p>What was on your mind:</p>
             <p>{j.journalEntry}</p>
            </fieldset>
        ))}
        </div>
        
        
    );
}


export default ViewPage;