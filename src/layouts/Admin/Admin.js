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
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import Sidebar from "components/Sidebar/Sidebar.js";

import { AppearanceContext } from "contexts/AppearanceContext";

import routes from "routes.js";

export default function Admin(props) {
    const mainPanelRef = React.useRef(null);

    const [sidebarOpened, setsidebarOpened] = React.useState(
        document.documentElement.className.indexOf("nav-open") !== -1
    );

    const [selectedLink, setSelectedLink] = React.useState(-1);

    // this function opens and closes the sidebar on small devices
    const toggleSidebar = (linkIndex) => {
        document.querySelectorAll(".nav-link").forEach((link, key) => {
            if(key !== linkIndex) link.classList.remove("nav-link-selected");

            else{ 
                document.getElementsByClassName("nav-link")[linkIndex].classList.add("nav-link-selected");
                setSelectedLink(key);
            }
        });
        document.documentElement.classList.toggle("nav-open");
        setsidebarOpened(!sidebarOpened);
    };

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if(prop.layout !== "/admin") return null;

            return(
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        });
    };
    return(
        <React.Fragment>
            <div className="wrapper">
                <Sidebar
                    routes={routes}
                    toggleSidebar={toggleSidebar}
                    selectedLink={selectedLink}
                />
                <div className="main-panel" ref={mainPanelRef} data={"blue"}>
                    <Switch>
                        {getRoutes(routes)}
                        <Redirect from="*" to="/admin/dashboard" />
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
}