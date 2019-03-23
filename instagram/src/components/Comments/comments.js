import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import AddComment from './addcomment'

import styled from 'styled-components'

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
            <CommentsWrapper>
                {this.state.comments.map((c,i) => <Comment comment={c} key={i} />)}
                <AddComment events={this.state.events} />
            </CommentsWrapper>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
}

export default Comments

const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.75rem;
    line-height: 1.85rem;
    text-align: left;
    width: 666px;
    padding: 0 16px;
`