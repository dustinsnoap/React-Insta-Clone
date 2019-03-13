import React from 'react'

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

export default Comment