import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header/header'
import Content from './content/content'
import Actions from '../Actions/actions'
import Statistics from './statistics/statistics'
import Comments from '../Comments/comments'

class Post extends Component {
    constructor({post}) {
        super()
        this.state = {
            post: post,
            user: {username: post.username, thumbnailUrl: post.thumbnailUrl},
            content: {imageUrl: post.imageUrl, timestamp: post.timestamp},
            statistics: {likes: post.likes},
            comments: post.comments,
            actions: [
                {name: 'like', click: null},
                {name: 'comment',click: null},
                {name: 'share',click: null},
                {name: 'save',click: null},
            ],
        }
    }
    render() {
        return (
            <article className='post'>
                <Header user={this.state.user} />
                <Content content={this.state.content} />
                <Actions actions={this.state.actions} />
                <Statistics statistics={this.state.statistics} />
                <Comments comments={this.state.comments} />
            </article>
        )
    }
}

Post.propTypes = {
    post: PropTypes.object,
}

export default Post