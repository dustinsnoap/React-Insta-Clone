import React from 'react'
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

export default Comments