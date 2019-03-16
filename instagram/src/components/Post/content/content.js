import React from 'react'
import PropTypes from 'prop-types'

const Content = ({content}) => {
    return (
        <div className='content'>
            <img src={content.imageUrl} alt={content.timestamp}/>
        </div>
    )
}

Content.propTypes = {
    imageUrl: PropTypes.string,
    timestamp: PropTypes.string,
}

export default Content