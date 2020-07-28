import React from 'react';

const ValidationMsg = ({ msg, classes }) =>
    <small className={`form-text text-danger ${classes}`}>
        {msg}
    </small>

export default ValidationMsg;
