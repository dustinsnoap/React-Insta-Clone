import React from 'react'
import Icons from '../../Icons/icons.svg'
import {HeaderLogo} from '../headerStyles'

const Logo = () =>
    <HeaderLogo>
        <svg viewBox="0 0 100 100" alt="Instagram">
            <use xlinkHref={Icons + "#logo"} />
        </svg>
        <h1>Instagram</h1>
    </HeaderLogo>

export default Logo