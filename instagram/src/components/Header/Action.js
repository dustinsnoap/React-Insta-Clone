import React from 'react'
import PropTypes from 'prop-types'

const Action = ({action}) => {
    return (
        <img className='action' src={'./icons/'+action+'.svg'} alt={action}/>
    )
}

Action.propTypes = {
    action: PropTypes.string,
}

export default Action