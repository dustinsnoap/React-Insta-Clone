import React, { Component } from 'react'
import {LoginWrapper, LoginElement, LoginHeader, LoginInput, LoginButton, LoginForgot} from './loginStyles'

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
            <LoginWrapper>
                <LoginElement onKeyUp={this.h_enter}>
                    <LoginHeader>Instagram</LoginHeader>
                    <LoginInput
                        className='username'
                        type='text' placeholder='Phone number, username, or email'
                        onChange={this.h_updateUsername}/>
                    <LoginInput
                        className='password'
                        type='password'
                        placeholder='Password'
                        onChange={this.h_updatePassword}/>
                    <LoginButton className='submit' onClick={this.h_checkStreetCred}>Log in</LoginButton>
                    <LoginForgot className='forgot' onClick={this.h_forgotPassword}>{this.state.forgotText}</LoginForgot>
                </LoginElement>
            </LoginWrapper>
        )
    }
}

export default Login