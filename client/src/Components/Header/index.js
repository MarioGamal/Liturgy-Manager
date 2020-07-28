import React from "react"
import Link from "../Link";
import sty from './index.module.scss';
import stgeorge from '../../images/st-george.jpg';
import { pastBooking, newBooking } from "../../utilies/constants";

const Header = () => {

    const navItems = (<ul className={`navbar-nav ${sty.navbarNav}`}>
        <li className="nav-item" >
            <Link to='/booking/checkevents' classes="nav-link pr-2 pl-2">
                {pastBooking}
            </Link>
        </li>
        <li className="nav-item" >
            <Link to='/booking/members' classes="nav-link pr-2 pl-2">
                {newBooking}
            </Link>
        </li>
    </ul>
    )

    return (
        <>
            <nav className={`${sty.navbar} navbar navbar-expand-lg navbar-light bg-light  `}>
                <div className={` navbar-collapse flex-row-reverse d-flex`}>
                    <Link exact to='/' classes={`nav-link pr-2 pl-2 ${sty.logoWidth}`}>
                        <img src={stgeorge} className="rounded-circle img-fluid" alt="..." />
                    </Link>
                    {navItems}
                </div>
            </nav>
        </>
    )
}
export default Header;