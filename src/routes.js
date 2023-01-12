// Sidebar linkovi (React router)

import Dashboard from "views/Dashboard.js";
import Account from "views/Account.js";
import Settings from "views/Settings.js";

var routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: "fa-sharp fa-solid fa-chart-simple",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/account",
        name: "account",
        icon: "fa-solid fa-user",
        component: Account,
        layout: "/admin"
    },
    {
        path: "/settings",
        name: "settings",
        icon: "fa-solid fa-gear",
        component: Settings,
        layout: "/admin"
    },
];

export default routes;