import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({comment}) => {
    return (
        <div className='comment'>
            <div className='content'>
                <pre className='username'>{comment.username}</pre>
                <p className='content'>{comment.text}</p>
            </div>
            <div className='icon-container'>
                <pre className='like insta-heart'></pre>
            </div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string),
}

export default Comment