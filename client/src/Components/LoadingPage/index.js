import React from 'react';
import Overlay from '../Overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import sty from './index.module.scss';

const LoadingPage = ({ title, body, buttons }) => (
    <>
        <Overlay />
        <FontAwesomeIcon icon={faSpinner} pulse className={sty.pageCenter} /> :
    </>
)
export default LoadingPage