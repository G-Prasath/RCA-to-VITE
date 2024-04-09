import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";


const Logo = ({image}) => {
    return(
        <div className="header-logo">
            <Link to="/">
                <img className="dark-logo" src="/images/logo/logo.png" alt="Logo" />
            </Link>
        </div>
    )
}

Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
