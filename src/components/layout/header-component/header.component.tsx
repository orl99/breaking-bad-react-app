import React from 'react'
import logo from '../../../assets/img/logo.png'
interface Props {
    
}

const HeaderComponent = (props: Props) => {
    return (
        <header>
            <img src={logo} alt="logo-app"/>
        </header>
    )
}

export default HeaderComponent
