import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Statistics = ({statistics}) => {
    return (
        <StatsWrapper>
            <pre className='likes'>{statistics.likes} likes</pre>
        </StatsWrapper>
    )
}

Statistics.propTypes = {
    likes: PropTypes.string,
}

export default Statistics

const StatsWrapper = styled.div`
    display: flex;
    padding: 0 16px;

    pre {
        font-size: 1.25rem;
    }
`