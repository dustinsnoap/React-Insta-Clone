import React from 'react';
import './searchbar.css'

const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className='logo'>
                <figure className='insta-logo'></figure>
                <h1>Instagram</h1>
            </div>
            <div className='search'>
                <input type='text' placeholder='Search'/>
            </div>
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
    )
}

export default SearchBar