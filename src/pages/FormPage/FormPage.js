import { Link } from 'react-router-dom';


function FormPage(props) {
  return (
    <>
    <div>This is the Form page</div>
    <Link className="btn btn-default" to="/">Home Page</Link>
    </>
  );
}



export default FormPage;