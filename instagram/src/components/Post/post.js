import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header/header'
import Content from './content/content'
import Actions from '../Actions/actions'
import Statistics from './statistics/statistics'
import Comments from '../Comments/comments'

import styled from 'styled-components'

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
                {name: 'like', click: this.h_like},
                {name: 'comment',click: this.h_null},
                {name: 'share',click: this.h_null},
                {name: 'save',click: this.h_save},
            ],
        }
    }
    h_null = () => {
        console.log('Try clicking something that works.')
    }
    h_save = (e, target) => {
        e.stopPropagation()
        target.classList.toggle('active')
    }
    h_like = (e, target) => {
        e.stopPropagation() //prevents double triggers when child is clicked
        this.setState(prevState => {
            target.classList.toggle('active')
            target.classList.contains('active') ? prevState.statistics.likes++ : prevState.statistics.likes--
            prevState.actions[0].active = !prevState.actions[0].active
            return ({
                statistics: prevState.statistics         
            })
        })
    }
    render() {
        return (
            <PostWrapper>
                <Header user={this.state.user} />
                <Content content={this.state.content} />
                <Actions actions={this.state.actions} />
                <Statistics statistics={this.state.statistics} />
                <Comments comments={this.state.comments} />
            </PostWrapper>
        )
    }
}

Post.propTypes = {
    post: PropTypes.object,
}

export default Post

const PostWrapper = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 666px;
    background-color: #fff;
    margin: 25px 0;
    border: 1px solid #e6e6e6;

    .actions {
        display: flex;
        padding: 8px 16px;
        width: 100%;
        
        .action {
            height: 25px;
            width: 25px;
            margin-right: 10px;
            stroke: black;
            fill: none;
            stroke-width: 4;
            
            &.like.active {
                fill: red;
                stroke: red;
            }
            &.save.active {
                fill: #333;
                stroke: #333;
            }

            &:last-of-type {
                margin: 0 0 0 auto;
            }
        }
    }
`