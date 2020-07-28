import React from 'react';

const Title = ({ title, subTitle, classes }) => (
    <div className={classes}>
        <h4>{title}</h4>
        <h5>
            {subTitle}
        </h5>
    </div>
)

export default Title