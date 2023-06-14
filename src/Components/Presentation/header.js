import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { isLoaded,isEmpty } from "react-redux-firebase";
import { logout } from "../../redux/actions/authActions";
import { connect } from "react-redux";

function LoggesOut(props) {
  return (
    <div className="login-cont">
        
        <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
    
    </div>
   
  )
}

const Header = (props) => {

const navigate=useNavigate()


  const handleLogOut=async()=>{
 const res=  await props.signOut();
 if(props.auth.uid==null){
    navigate("/")
 }


   console.log('The user will sign out');
  }

  return (  
    <header className="header">
    <nav className="nav">
        <a href="/" className="holder-logo">
          <h1>Resume Builder</h1>
          {/* <img className='logo' style={{width:"5rem",height:"5rem"}} src={logo}></img> */}
        </a> 
          <div className="header-links full-height">
  
          { isLoaded(props.auth) && !isEmpty(props.auth) ?<>
             <div className="logout-cont">
             <ul >
              <li className="signin ">
                <NavLink className="email" to="/">
                   {props.auth.email}
                </NavLink>
              </li>
              <li className="signin"> 
                <button className="text-blue btnv-3" onClick={handleLogOut}>
               Signout
                </button>         
              </li>
            </ul>
             </div>
            
  
          </>:<LoggesOut></LoggesOut>}
            <div className="default">
            <ul id="nav-mid">
              <li>
              <NavLink className="btn-nvt-gm" to="/resume-templates">
              Resume Templates
              </NavLink>
              </li> 
              <li className="holder-pricing">            
                <NavLink className="btn-nvt-gm" to="/about-us">
                About Us
                </NavLink>
              </li>        
            </ul>
            </div>
           
              
        </div>   
      </nav>
    </header>
  

  );
};

const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
   signOut:()=>dispatch(logout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);