import React, { Component } from 'react'

class AddComment extends Component {
    constructor({events}) {
        super()
        this.state = {
            commentText: 'Add a comment...',
            active: false,
            edited: false,
            events: events,
        }
    }
    h_keyUp = e => { //submit new comments || update commentText
        if(e.key === 'Enter') {
            this.h_addComment(this.state.commentText)
            this.setState({commentText: 'Add a comment...'})
            e.target.value = ''
            this.h_updateHeight(e) //update height on submit
        }
        else this.setState({commentText: e.target.value})
    }
    h_addComment = comment => { //gets passed to comments.js to be handled
        this.state.events.addComment(comment)
    }
    h_focus = input => { //if previous input, update textarea value
        if(this.state.commentText !== 'Add a comment...')
            input.target.value = this.state.commentText
    }
    h_blur = input => { //remove textarea value to display placeholder
        if(this.state.commentText === '')
            this.setState({commentText: 'Add a comment...'})
        input.target.value = ''
    }
    h_updateHeight = input => { //calcs amount of lines - adds and subjects height of textarea accordingly
        let lines = input.target.value.split(/\r*\n/).length
        input.target.style.height  = (lines * 24 + 5) + 'px';
    }
    render() {
        return (
            <div className='add-comment'>
                <textarea
                    placeholder={this.state.commentText}
                    onChange={this.h_updateHeight}
                    onKeyUp={this.h_keyUp}
                    onBlur={this.h_blur}
                    onClick={this.h_focus}
                ></textarea>
                <pre>···</pre>
            </div>
        )
    }
}

export default AddComment