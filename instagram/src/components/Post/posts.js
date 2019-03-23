import React from 'react'
import PropTypes from 'prop-types'
import Post from './post'

const Posts = ({posts}) => {
    return (
        <div className='posts'>
            {posts.map(post => <Post post={post} key={post.timestamp} />)}
        </div>
    )
}

Posts.propTypes = {
    likes: PropTypes.arrayOf(PropTypes.object),
}

export default Posts