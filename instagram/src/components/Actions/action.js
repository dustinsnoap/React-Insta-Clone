import React from 'react'
import PropTypes from 'prop-types'

const Action = ({action}) => {
    return (
        <img className='action' src={'./icons/'+action.name+'.svg'} onClick={action.click} alt={action.name}/>
    )
}

Action.propTypes = {
    name: PropTypes.string,
    // click: PropTypes.Action
}

export default Action