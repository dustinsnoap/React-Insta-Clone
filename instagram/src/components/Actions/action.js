import React from 'react'
import PropTypes from 'prop-types'
import Icons from '../Icons/icons.svg'

const Action = ({action}) => {
    return (
        <svg className={'action ' + action.name}
            viewBox="0 0 100 100"
            onClick={(e) => action.click(e, e.target)}
            alt={action.name}>

            <use xlinkHref={Icons + '#' + action.name}
            onClick={(e) => action.click(e, e.target.parentNode)}/>
        </svg>
    )
}

Action.propTypes = {
    name: PropTypes.string,
    // click: PropTypes.Action
}

export default Action