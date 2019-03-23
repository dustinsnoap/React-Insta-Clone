import React, { Component } from 'react'
import Login from '../Login/login'

const authenticate = App =>
    class extends Component {
        constructor() {
            super()
            this.state = {
                loggedIn: false,
            }
        }
        componentDidMount() {
            const usr = localStorage.getItem('username')
            const pwd = localStorage.getItem('password')
            if(usr && pwd) this.setState({loggedIn: true})
            else this.setState({loggedIn: false})
        }
        render() {
            if(this.state.loggedIn) return <App />
            else return <Login />
        }
    }

export default authenticate