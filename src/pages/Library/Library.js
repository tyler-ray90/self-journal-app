
import { Link } from 'react-router-dom';

function Library(props) { 
    
    return ( 
        <div className="library-container">
            <table>
        {props.journals.journals.map((j) => ( 
            <fieldset key={j.journal}>
                <thead>
                    <th>Date</th>
                </thead>
             <Link to="/view/?{j._id}">{j.createdAt ? j.createdAt.substr(0,10):null}</Link>
             <p>How were you feeling: {j.feeling}</p>
             <br/>
             <p>Achievments/Intentions: {j.goal}</p>
             <br/>
             <p>What were you grateful for: {j.grateful}</p>
             <br/>
             <p>What was on your mind: {j.journalEntry}</p>
            </fieldset>
        ))} 
        </table>
        </div>

    );
};

export default Library;