import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';



const Navbar = () => (
     <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" href="#">Yukoni Base</Link>
            </div>
           
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Services</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                                         <li>
                         <Link to="/signup">Sign up</Link>
                    </li>
                     <li>
                        <Link to="/login">Log in</Link>
                    </li>
                     <li>
                        <Link to="/logout">Log out</Link>
                    </li>
                </ul>
            </div>
         
        </div>
       
    </nav>

       
);


export default Navbar;