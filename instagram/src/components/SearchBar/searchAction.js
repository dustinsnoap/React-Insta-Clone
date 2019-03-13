import React from 'react'

const SearchAction = props => {
    return (
        <div className='icon-container'>
            <pre className={'insta-' + props.action}></pre>
        </div>
    )
}

export default SearchAction