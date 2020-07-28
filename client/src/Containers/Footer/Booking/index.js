import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Booking = ({ leftButton, rightButton }) => {
    return (
        <>
            <ul className="navbar-nav mr-auto">
                {leftButton && <button onClick={leftButton.onClick}
                    className="btn btn-outline-success btn-sm" >
                    <span> <FontAwesomeIcon icon={faChevronLeft} /> {leftButton.label}</span>
                </button>}
            </ul>
            <ul className='navbar-nav'>
                {rightButton && <button onClick={rightButton.onClick}
                    className="btn btn-outline-success btn-sm">
                    <span>{rightButton.label} <FontAwesomeIcon icon={faChevronRight} /></span>
                </button>}
            </ul>
        </>
    )
}


export default Booking;