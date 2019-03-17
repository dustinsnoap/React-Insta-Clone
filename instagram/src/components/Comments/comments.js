import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import AddComment from './addcomment'
import './comments.css'

class Comments extends Component {
    constructor({comments}) {
        super()
        this.state = {
            comments: comments,
            events: {addComment: this.h_addComment,},
        }
    }
    h_addComment = comment => {
        if(comment !== '' && comment !== 'Add a comment...') {
            let newComment = {
                username: 'cheetos',
                text: comment,
            }
            this.setState(prevState => {
                prevState.comments.push(newComment)
                return {
                    comments: prevState.comments
                }
            })
        }
    }
    render() {
        return (
            <div className='comments'>
                {this.state.comments.map((c,i) => <Comment comment={c} key={i} />)}
                <AddComment events={this.state.events} />
            </div>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
}

export default Comments