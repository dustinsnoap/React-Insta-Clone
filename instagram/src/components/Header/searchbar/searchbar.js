import React, { Component } from 'react'
import Icons from '../../Icons/icons.svg'
import {Search} from '../headerStyles'

class SearchBar extends Component {
    constructor({events}) {
        super()
        this.state = {
            searchText: 'Search',
            active: false,
            edited: false,
            events: events,
        }
    }
    h_updateSearch = input => {
        let text = input.target.value
        this.state.events.filterPostsByUsername(text)
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
                <Search className='active'>
                    <div className='placeholder'>
                        <svg viewBox="0 0 100 100" alt="Search">
                            <use xlinkHref={Icons + '#magnify'} />
                        </svg>
                    </div>
                    <input type='text'
                        ref={this.h_focusInput}
                        onKeyUp={this.h_updateSearch}
                        onBlur={this.h_deactivate}/>
                </Search>
            );
        else
            return (
                <Search onClick={this.h_activate}>
                    <div className='placeholder'>
                        <svg viewBox="0 0 100 100" alt="Search">
                            <use xlinkHref={Icons + '#magnify'} />
                        </svg>
                        <pre className='text'>{this.state.searchText}</pre>
                    </div>
                </Search>
            );
    }
}

export default SearchBar