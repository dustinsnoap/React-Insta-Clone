import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Header = ({user}) => {
    return (
        <HeaderWrapper>
            <img className='thumbnail' src={user.thumbnailUrl} alt={user.username}/>
            <pre className='username'>{user.username}</pre>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
}

export default Header

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;

    * {
        margin: 0 10px;
    }
    .thumbnail {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    .username {
        font-size: 2rem;
        font-weight: 700;
    }
`