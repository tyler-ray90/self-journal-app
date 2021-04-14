import { Link } from 'react-router-dom';

function Library(props) {
    console.log(props.journals);
    return (
        <>
        <Link to="/">Home Page</Link>
        <div>This is the Library page</div>
        <section>
            <div>
        {props.journals.journals.map((j) => (
          <article key={j.journal}>
             <div>{j.feeling}</div>
             <div>{j.goal}</div>
          </article>
        ))}
      </div>
    </section>
        </>

    );
};

export default Library;