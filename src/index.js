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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import  Landing from "views/Landing.js";
import AdminLayout from "layouts/Admin/Admin.js";
import Login from "views/Login.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/wrappers/ThemeWrapper";
import LanguageContextWrapper from "./components/wrappers/LanguageContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeContextWrapper>
        <LanguageContextWrapper>
            <BrowserRouter>
                <Switch>
                    <Route path="/landing" component={Landing} />
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                    <Route path="/login" component={Login}/>
                    <Redirect from="/" to="/admin/dashboard" />
                </Switch>
            </BrowserRouter>
        </LanguageContextWrapper>
    </ThemeContextWrapper>
);
