import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();
    }
    handleEmailChange = (e) => {
        console.log(e.target.value)
    }

    handlePasswordChange = (e) => {
        console.log(e.target.value);
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log('this.emailInputRef', this.emailInputRef)
        // console.log('this.passwordInputRef', this.passwordInputRef)
        this.state = {
            email: '',
            password:'',
        };
    }
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
                <div className="field">
                    <input 
                        type="email" placeholder="Email" required   
                        //ref={this.emailInputRef} 
                        onChange={this.handleEmailChange}
                    />
                </div>
                <div className="field">
                <input 
                    type="Password" 
                    placeholder="Password" 
                    required 
                    //ref={this.passwordInputRef}
                    onChange={this.handlePasswordChange}
                />
                </div>
                <div className="field">
                    <button onClick={this.handleFormSubmit}>Log In</button>
                </div>
            </form>
        );
    }
}

export default Login;