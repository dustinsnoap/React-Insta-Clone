import React, { Component } from 'react'
import './login.css'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            usr: '',
            pwd: '',
            forgotText: 'Forgot password?',
        }
    }
    h_enter = e => {
        if(e.key === 'Enter') {
            this.h_checkStreetCred()
        }
    }
    h_updateUsername = e => {
        this.setState({usr: e.target.value})
    }
    h_updatePassword = e => {
        this.setState({pwd: e.target.value})
    }
    h_checkStreetCred = () => {
        const usr = this.state.usr
        const pwd = this.state.pwd
        localStorage.setItem('username', JSON.stringify(usr))
        localStorage.setItem('password', JSON.stringify(pwd))
        window.location.reload()
    }
    h_forgotPassword = () => {
        this.setState({forgotText: 'That sucks.'})
    }
    render() {
        return (
            <div className='login-wrapper'>
                <div className='login' onKeyUp={this.h_enter}>
                    <h1>Instagram</h1>
                    <input
                        className='username'
                        type='text' placeholder='Phone number, username, or email'
                        onChange={this.h_updateUsername}/>
                    <input
                        className='password'
                        type='password'
                        placeholder='Password'
                        onChange={this.h_updatePassword}/>
                    <button className='submit' onClick={this.h_checkStreetCred}>Log in</button>
                    <pre className='forgot' onClick={this.h_forgotPassword}>{this.state.forgotText}</pre>
                </div>
            </div>
        )
    }
}

export default Login