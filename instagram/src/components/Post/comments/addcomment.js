import React, { Component } from 'react'

class AddComment extends Component {
    constructor() {
        super()
        this.state = {
            commentText: 'Add a comment...',
            active: false,
            edited: false,
        }
    }
    h_updateHeight = input => {
        let lines = input.target.value.split(/\r*\n/).length
        input.target.style.height  = (lines * 24 + 5) + 'px';
    }
    render() {
        return (
            <div className='add-comment'>
                <textarea placeholder={this.state.commentText} onChange={this.h_updateHeight}></textarea>
                <pre>···</pre>
            </div>
        )
    }
}

export default AddComment