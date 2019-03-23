import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Comment = ({comment}) => {
    return (
        <CommentWrapper>
            <div className='content'>
                <pre className='username'>{comment.username}</pre>
                <p>{comment.text}</p>
            </div>
            {/* <Action action='like' /> */}
        </CommentWrapper>
    )
}

Comment.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string),
}

export default Comment

const CommentWrapper = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;

    .content {
        .username {
            font-weight: 700;
            margin-right: 5px;
            float: left;
        }
        p {
            float: left;
        }
    }
`