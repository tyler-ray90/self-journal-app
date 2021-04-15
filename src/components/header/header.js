import { Link } from 'react-router-dom';
import { login, logout } from '../../services/Firebase';


function Header(props) {
    return (
    <>
   <Link to="/" 
   style={{textDecoration: 'none', color: 'white'}}>
       <h1>Self-Journal</h1>
    </Link> 


    <Link to="/library" 
    style={{textDecoration: 'none', color: 'white'}}>
        Journal
    </Link>

    <Link to="/form" 
    style={{textDecoration: 'none', color: 'white'}}>
        Add Entry
    </Link>
     
     {
            props.user ?
            <>
                <p>Welcome, {props.user.displayName}</p>
                <p><img src={props.user.photoURL} alt={props.user.displayName}/></p>
                <div onClick={login}>Login</div>
            </>
            :
            <div onClick={logout}>Logout</div>
        }
    </>

    );

}

export default Header;

