import React from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import AddComment from './addcomment'

const Comments = ({comments}) => {
    return (
        <div className='comments'>
            {comments.map((comment,i) => <Comment comment={comment} key={i} />)}
            <AddComment />
        </div>
    )
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
}

export default Comments