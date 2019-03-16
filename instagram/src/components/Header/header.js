import React, { Component } from 'react'
import Logo from './Logo/logo'
import SearchBar from './searchbar/searchbar'
import Actions from '../Actions/actions'
import './header.css'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            actions: [
                {
                    name: 'explore',
                    click: null,
                },
                {
                    name: 'like',
                    click: null,
                },
                {
                    name: 'account',
                    click: null,
                }
            ]
        }
    }
    render() {
        return (
            <div className='header'>
                <Logo />
                <SearchBar />
                <Actions actions={this.state.actions} />
            </div>
        );
    }
}

export default Header