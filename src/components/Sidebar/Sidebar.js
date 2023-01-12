/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";

import { AppearanceContext } from "contexts/AppearanceContext";
import { LanguageContext } from "../../contexts/LanguageContext";

import logo_dark from "../../assets/img/klik-trade-logo_dark.png";
import logo_white from "../../assets/img/klik-trade-logo_white.png";

var ps;

export default function Sidebar(props) {
    const logo = {
        dark: logo_dark,
        white: logo_white
    }
    const location = useLocation();
    const sidebarRef = React.useRef(null);
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
    };
    const linkOnClick = () => {
        document.documentElement.classList.remove("nav-open");
    };
    const { routes } = props;

    return(
        <div className="sidebar">
            <div className="sidebar-wrapper" ref={sidebarRef}>
                <div className="logo">
                    <a className="simple-text logo-mini" href="/" target="_blank" onClick={props.toggleSidebar}>
                        <div className="logo-img">
                            <AppearanceContext.Consumer>
                            {({ theme })=> (
                                <img src={theme === "dark" ? logo.dark : logo.white} alt="klik-trade-logo" draggable={false} />
                            )}    
                            </AppearanceContext.Consumer>
                        </div>
                    </a>
                </div>
                <Nav>
                    {routes.map((prop, key) => {
                        if(prop.redirect) return null;
                        
                        return(
                            <li key={key}>
                                <NavLink
                                    to={prop.layout + prop.path}
                                    className={"nav-link" + (key === props.selectedLink ? " nav-link-selected" : "")}
                                    activeClassName="active"
                                    onClick={()=>props.toggleSidebar(key)}
                                >
                                    <i className={prop.icon} />
                                    <LanguageContext.Consumer>
                                    {({ content }) => (
                                        <p>{content?.sidebar?.[`${prop.name}`]}</p>
                                    )}
                                    </LanguageContext.Consumer>
                                </NavLink>
                            </li>
                        );
                    })}
                    <li className="active-pro">
                        <LanguageContext.Consumer>
                        {({ content }) =>(
                            <>
                                <ReactstrapNavLink href="/logout">
                                    <i className="fa-solid fa-right-from-bracket"/>
                                    <p>{content?.sidebar?.logout}</p>
                                </ReactstrapNavLink>
                            </>
                        )}
                        </LanguageContext.Consumer>
                    </li>
                </Nav>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
        // innerLink is for links that will direct the user within the app
        // it will be rendered as <Link to="...">...</Link> tag
        innerLink: PropTypes.string,
        // the text of the logo
        text: PropTypes.node,
        // the image src of the logo
        imgSrc: PropTypes.string
    })
};