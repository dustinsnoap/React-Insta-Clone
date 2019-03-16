import React from 'react'
import PropTypes from 'prop-types'
import Action from '../actions/action'

const Comment = ({comment}) => {
    return (
        <div className='comment'>
            <div className='content'>
                <pre className='username'>{comment.username}</pre>
                <p className='content'>{comment.text}</p>
            </div>
            <Action action='like' />
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string),
}

export default Comment