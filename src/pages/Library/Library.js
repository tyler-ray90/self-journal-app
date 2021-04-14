

function Library(props) {
    console.log(props.journals);
    return (
        <div className="library-container">
        {props.journals.journals.map((j) => (
          <fieldset key={j.journal}>
             <div>{j.feeling}</div>
             <div>{j.goal}</div>
             <div>{j.grateful}</div>
             <div>{j.journalEntry}</div>
          </fieldset>
        ))}
        </div>

    );
};

export default Library;