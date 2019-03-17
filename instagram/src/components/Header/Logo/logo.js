import React from 'react'
import Icons from '../../Icons/icons.svg'

const Logo = () =>
    <div className='logo'>
        <svg viewBox="0 0 100 100" alt="Instagram">
            <use xlinkHref={Icons + "#logo"} />
        </svg>
        <h1>Instagram</h1>
    </div>

export default Logo