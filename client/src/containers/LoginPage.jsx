import React, {PropTypes} from 'react';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this
            .processForm
            .bind(this);
        this.changeUser = this
            .changeUser
            .bind(this);
    }
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        console.log('email:', this.state.user.email);
        console.log('password:', this.state.user.password);
    }
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({user});
    }

    render() {
        return (<LoginForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            user={this.state.user}/>);
    }

}