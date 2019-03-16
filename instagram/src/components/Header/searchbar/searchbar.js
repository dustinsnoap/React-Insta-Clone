import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            searchText: 'Search',
            active: false,
            edited: false,
        }
    }
    h_updateSearch = input => {
        let text = input.target.value
        this.setState({
            edited: true,
            searchText: text
        })
    }
    h_activate = () => {
        this.setState({active: true})
    }
    h_deactivate = () => {
        if(this.state.searchText === '') this.setState({searchText: 'Search', edited: false})
        this.setState({active: false})
    }
    h_focusInput = input => {
        if(input) {
            if(this.state.edited) input.value = this.state.searchText
            input.focus()
            input.select()
        }
    }
    render() {
        if(this.state.active)
            return (
                <div className='search active'>
                    <div className='placeholder'>
                        <img src='./icons/magnify.svg' alt='search'/>
                    </div>
                    <input type='text' ref={this.h_focusInput} onKeyUp={this.h_updateSearch} onBlur={this.h_deactivate}/>
                </div>
            );
        else
            return (
                <div className='search dead' onClick={this.h_activate}>
                    <div className='placeholder'>
                        <img src='./icons/magnify.svg' alt='search'/>
                        <pre className='text'>{this.state.searchText}</pre>
                    </div>
                </div>
            );
    }
}

export default SearchBar