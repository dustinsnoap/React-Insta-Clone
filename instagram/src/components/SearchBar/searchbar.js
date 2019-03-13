import React, { Component } from 'react'
import SearchInput from './SearchInput';
import SearchAction from './searchAction'
import './searchbar.css'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            actions: ['explore', 'heart', 'account'],
        }
    }
    render() {
        return (
            <div className='search-bar'>
                <div className='logo'>
                    <figure className='insta-logo'></figure>
                    <h1>Instagram</h1>
                </div>
                <SearchInput />
                <div className='actions'>
                    {this.state.actions.map(action => <SearchAction action={action} key={action}/>)}
                </div>
            </div>
        );
    }
}

export default SearchBar