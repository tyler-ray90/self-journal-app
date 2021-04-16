import { Link } from 'react-router-dom';
import { login, logout } from '../../services/Firebase';


function Header(props) {
    return (
    <>
   <Link className="links" to="/" 
   style={{textDecoration: 'none', color: 'white'}}>
       <h1 className="title">Self-Journal</h1>
    </Link> 


    <Link className="links" to="/library" 
    style={{textDecoration: 'none', color: 'white'}}>
        Journal
    </Link>

    <Link className="links" to="/form" 
    style={{textDecoration: 'none', color: 'white'}}>
        Add Entry
    </Link>
       
       {
   props.user ?
      <>
          <p id="welcome" className="links" >Welcome, {props.user.displayName}</p>
          <p className="links" ><img src={props.user.photoURL} alt={props.user.displayName}/></p>
          <div className="links" onClick={logout}>Logout</div>
     </>
      :
     <div onClick={login}>Login</div>
 }
    </>

    );

}

export default Header;

