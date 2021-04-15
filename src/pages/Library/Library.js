
import { Link } from 'react-router-dom';

function Library(props) { 
    
    return ( 
        <div className="library-container">
    {      
        props.user &&
            <table>
        {props.journals.journals.map((j) => ( 
            <fieldset key={j.journal}>
                <thead>
                    <th>Journal Entry-</th>
                </thead>
             <Link to={`/view/${j._id}`}>Date: {j.createdAt ? j.createdAt.substr(0,10):null}</Link>
            </fieldset>
        ))} 
        </table>
    }
        </div>

    );
};

export default Library;