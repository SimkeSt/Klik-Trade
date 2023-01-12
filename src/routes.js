// Sidebar linkovi (React router)

import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import Settings from "views/Settings.js";

var routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
    },
    // {
    //     path: "/notifications",
    //     name: "notifications",
    //     icon: "tim-icons icon-bell-55",
    //     component: Notifications,
    //     layout: "/admin"
    // },
    {
        path: "/user-profile",
        name: "profile",
        icon: "tim-icons icon-single-02",
        component: UserProfile,
        layout: "/admin"
    },
    // {
    //     path: "/tables",
    //     name: "table List",
    //     icon: "tim-icons icon-puzzle-10",
    //     component: TableList,
    //     layout: "/admin"
    // },
    {
        path: "/settings",
        name: "settings",
        icon: "tim-icons icon-settings",
        component: Settings,
        layout: "/admin"
    },
];
export default routes;