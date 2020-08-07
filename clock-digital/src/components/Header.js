import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import { Icon, InlineIcon } from '@iconify/react';
import clockIcon from '@iconify/icons-il/clock';
import './Header.css'

function Header(props) {
    return (
        
           <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
            <Icon icon={clockIcon}  color="white" height="50px" width="50px"/>
                <div className="h1 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
     </nav> 
        
    )
}

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header


