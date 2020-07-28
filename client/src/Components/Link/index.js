import React from 'react';
import { NavLink } from 'react-router-dom';
import sty from './index.module.scss';

const Link = ({ children, classes, ...rest }) => (
    <NavLink className={`${classes} ${sty.link}`} {...rest}>{children}</NavLink>
)
export default Link