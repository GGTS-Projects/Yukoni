import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({onSubmit, onChange, error, user}) => (
    <Card className="container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading"> Sign Up</h2>
           
            
            <div className="field-line">
                <TextField
                    floatingLabelText="Name"
                    name="name"
                    errorText="hello"
                    onChange={onChange}
                    value={user.name}/>
            </div>
            <div className="field-line">
                <TextField
                    floatingLabelText="Email"
                    name="email"
                    errorText="hello"
                    onChange={onChange}
                    value={user.email}/>
            </div>
            <div className="field-line">
                <TextField
                    floatingLabelText="Password"
                    name="password"
                    errorText="hello"
                    onChange={onChange}
                    value={user.password}/>
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Create New Account" primary/>
            </div>

            <CardText>Already have an account?
                <Link to={'/login'}>Log in</Link>
            </CardText>
        </form>
    </Card>
);
SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};
export default SignUpForm;
