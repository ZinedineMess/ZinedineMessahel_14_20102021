import CreateEmployee from 'pages/CreateEmployee/CreateEmployee';
import CurrentEmployee from 'pages/CurrentEmployee/CurrentEmployee';
import Error from 'pages/Error/Error';

export const routes = [
    {
        path: '/',
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
