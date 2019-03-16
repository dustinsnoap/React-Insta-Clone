import React from 'react'
import PropTypes from 'prop-types'

const Statistics = ({statistics}) => {
    return (
        <div className='statistics'>
            <pre className='likes'>{statistics.likes} likes</pre>
        </div>
    )
}

Statistics.propTypes = {
    likes: PropTypes.string,
}

export default Statistics