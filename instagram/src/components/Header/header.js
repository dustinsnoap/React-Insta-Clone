import React, { Component } from 'react'
import Logo from './Logo/logo'
import SearchBar from './searchbar/searchbar'
import Actions from '../Actions/actions'
import {HeaderWrapper} from './headerStyles'

class Header extends Component {
    constructor({events}) {
        super()
        this.state = {
            actions: [
                {
                    name: 'explore',
                    click: this.h_null,
                },
                {
                    name: 'like',
                    click: this.h_null,
                },
                {
                    name: 'account',
                    click: this.h_null,
                }],
            events: events,
        }
    }
    h_null = () => {
        console.log("Nope, nope. To the nope.")
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <SearchBar events={this.state.events} />
                <Actions actions={this.state.actions} />
            </HeaderWrapper>
        );
    }
}

export default Header