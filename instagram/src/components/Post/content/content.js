import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Content = ({content}) => {
    return (
        <ContentWrapper>
            <img src={content.imageUrl} alt={content.timestamp}/>
        </ContentWrapper>
    )
}

Content.propTypes = {
    imageUrl: PropTypes.string,
    timestamp: PropTypes.string,
}

export default Content

const ContentWrapper = styled.div`
    width: 100%;
    height: fit-content;

    img {
        height: 100%;
        width: 100%;
    }
`