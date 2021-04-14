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
     </section>
    </main>
  </div>
    );
};


export default HomePage;