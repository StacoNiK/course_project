import React from "react";
import {
    Link
} from "react-router-dom";

import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse } from "react-bootstrap";

class AppNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

     render() {
         return (
             <Navbar  expand="md">
                 <NavbarBrand href="/">Rentcar</NavbarBrand>

                 <Nav>
                     <NavItem>
                         <NavLink>
                            <Link to="/tours">Туры</Link>
                         </NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink>
                             <Link to="/tours/requests">Заявки</Link>
                         </NavLink>
                     </NavItem>

                 </Nav>
             </Navbar>
         );
     }

}

export default AppNavbar;