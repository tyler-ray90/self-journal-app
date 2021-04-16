function ViewPage(props) {
    console.log(props.match.params.id);
    console.log(props.journals.journals);
    const result = props.journals.journals.filter(journal => journal._id === props.match.params.id)
    return (
        <div className="view-container">
        
        {result.map((j) => (
            <fieldset className="fieldset" key={j.journal}>
            <h2>Date: {j.createdAt ? j.createdAt.substr(0,10):null}</h2>
             <h3>How were you feeling:</h3>
             <p>{j.feeling}</p>
             <br/>
             <h3>Achievments/Intentions:</h3>
             <p>{j.goal}</p>
             <br/>
             <h3>What were you grateful for:</h3>
             <p>{j.grateful}</p>
             <br/>
             <h3>What was on your mind:</h3>
             <p>{j.journalEntry}</p>
            </fieldset>
        ))}
        </div>
        
        
    );
}


export default ViewPage;