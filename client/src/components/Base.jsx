import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Base = ({children}) => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <IndexLink to="/">React App</IndexLink>
            </div>

            <div className="top-bar-right">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>

        </div>


            {children}
   

    </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export default Base;