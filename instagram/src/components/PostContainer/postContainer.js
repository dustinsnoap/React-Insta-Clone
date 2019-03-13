import React from 'react'
import Comments from './comments'
import './postcontainer.css'

const PostContainer = ({post}) => {
    return (
        <article className='post-container'>
            <header>
                <img className='thumbnail' src={post.thumbnailUrl} alt={post.username}/>
                <pre className='username'>{post.username}</pre>
            </header>
            <div className='content'>
                <img src={post.imageUrl} alt={post.timestamp}/>
            </div>
            <Comments comments={post.comments} />
        </article>
    )
}

export default PostContainer