import { Link } from 'react-router-dom';


function Header(props) {
    return (
    <>
   <Link to="/" 
   style={{textDecoration: 'none', color: 'white'}}>
       <h1>Self-Journal</h1>
    </Link> 

    <div>Welcome, User</div>

    <Link to="/library" 
    style={{textDecoration: 'none', color: 'white'}}>
        Journal
    </Link>

    <div>Login</div>
    </>

    );

}

export default Header;

