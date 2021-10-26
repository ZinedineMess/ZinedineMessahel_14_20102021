import CreateEmployee from "pages/CreateEmployee/CreateEmployee";
import CurrentEmployee from "pages/CurrentEmployee/CurrentEmployee";
import Error from "pages/Error/Error";
import Home from "pages/Home/Home";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/new-employee',
        exact: true,
        component: CreateEmployee
    },
    {
        path: '/employee-list',
        exact: true,
        component: CurrentEmployee
    },
    {
        path: '*',
        exact: false,
        component: Error
    },
];
