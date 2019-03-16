import React from 'react'
import PropTypes from 'prop-types'

const Header = ({user}) => {
    return (
        <header>
            <img className='thumbnail' src={user.thumbnailUrl} alt={user.username}/>
            <pre className='username'>{user.username}</pre>
        </header>
    )
}

Header.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
}

export default Header