import React, { Component } from 'react'
// import InputDead from './InputDead'
import './searchbar.css'
import SearchInput from './SearchActive';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        // console.log('search: ' + this.state.search)
        return (
            <div className='search-bar'>
                <div className='logo'>
                    <figure className='insta-logo'></figure>
                    <h1>Instagram</h1>
                </div>
                <SearchInput />
                <div className='actions'>
                    <div className='icon-container'>
                        <pre className='insta-explore'></pre>
                    </div>
                    <div className='icon-container'>
                        <pre className='insta-heart'></pre>
                    </div>
                    <div className='icon-container'>
                        <pre className='insta-account'></pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar