import React from 'react'
import PropTypes from 'prop-types'
import Action from './action'

const Actions = ({actions}) => {
    return (
        <div className='actions'>
            {actions.map(action => <Action action={action} key={action.name} />)}
        </div>
    )
}

Actions.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.object),
}

export default Actions