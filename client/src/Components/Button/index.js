import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Button = ({ label, icon, classes, loading, ...rest }) => (
    <button className={`btn ${classes}`} type="button" {...rest}>
        {label} {loading ?
            <FontAwesomeIcon icon={faSpinner} pulse /> :
            <FontAwesomeIcon icon={icon} />}
    </button>
)
export default Button;