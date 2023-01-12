/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class NavBar extends React.Component {
  componentDidMount() {
//     let headroom = new Headroom(document.getElementById("navbar-main"));
//     // initialise
//     headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return(<>
        <header className="header-global">
            <Navbar
                className="navbar-main navbar-transparent navbar-light headroom"
                expand="lg"
                id="navbar-main"
            >   
                <Container>
                    <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                        <img alt="klik-trade-logo" src={require("../assets/img/klik-trade-logo_dark.png")} />
                    </NavbarBrand>
                    <Nav className="align-items-lg-center ml-lg-auto" navbar>
                        <NavItem>
                            <Button color="primary" href="/login">REGISTER</Button>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </header>
        </>);
    }
}

export default NavBar;
