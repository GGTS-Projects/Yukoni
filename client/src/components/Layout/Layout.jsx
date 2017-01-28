import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Auth from '../../helper/Auth';

const Base = ({children}) => (
  <div className="container">
    <Navbar/> 
    {children}
    < Footer/>
  </div>
);
Base.propTypes = {
  children: PropTypes.object.isRequired
}
export default Base;