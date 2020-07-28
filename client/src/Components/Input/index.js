import React from 'react';
import sty from './index.module.scss'
import ValidationMsg from '../ValidationMsg'
const Input = ({ validationMsg, children, classes, rtl, ...rest }) => {

    return (
        <div className={classes} >
            <div className='input-group' >
                <input type="text" className={`form-control ${rtl && sty.dirRtl}`} {...rest} />
                {children && <div className="input-group-prepend">
                    <span className="input-group-text">{children}</span>
                </div>}
            </div>
            {validationMsg && <ValidationMsg msg={validationMsg} />}
        </div>
    )
}


export default Input