import React from 'react';
import sty from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const InfoBar = ({ type, title, items, classes }) => (
    <div id={sty.infoBar} className={`alert alert-${type} pr-3 pl-3 ${classes}`} role="alert">
        {title && <h5 className={`alert-heading`}>{title}
        </h5>}
        <ul className="list-group list-group-flush">
            {
                items.length ?
                    items.map((item, index) => <li key={index} className={`${sty.listGroupItem} list-group-item pr-0 pl-0`}>
                        {item}</li>
                    ) : <div className={sty.loading} >
                        <FontAwesomeIcon icon={faSpinner} pulse />
                    </div>
            }
        </ul>

    </div>
)

export default InfoBar;