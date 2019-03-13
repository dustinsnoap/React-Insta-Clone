import React, { Component } from 'react'

class SearchInput extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            placeholder: 'Search',
            active: false,
        }
    }
    h_updateSearch = input => {
        let text = input.target.value
        this.setState({search: text})
    }
    h_activate = () => {
        this.setState({active: true})
    }
    h_deactivate = component => {
        this.setState({active: false})
    }
    h_focusInput = component => {
        if(component) component.focus()
    }
    render() {
        if(this.state.active)
            return (
                <div className='search active'>
                    <div className='placeholder'>
                        <figure className='insta-magnify'></figure>
                    </div>
                    <input type='text' ref={this.h_focusInput} onChange={this.h_updateSearch} onBlur={this.h_deactivate}/>
                </div>
            );
        else
            return (
                <div className='search dead' onClick={this.h_activate}>
                    <div className='placeholder'>
                        <figure className='insta-magnify'></figure>
                        <pre className='text'>{this.state.placeholder}</pre>
                    </div>
                </div>
            );
    }
}

export default SearchInput