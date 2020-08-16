import React from 'react';

import Signin from './components/Signin-Signup/index';
import UserProfile from './components/User-Profile/index';
import Message from './components/Message/Message-Page/index';
import AllUser from './components/All-User/index';
import Home from './components/Home/index';
import ViewJob from './components/Job-View/index';
import Search from './components/Search/index';
import Stats from './components/Stats/index';
import Admin from './components/Admin/index';
const routes = [
    {
        path:'/signin',
        exact: true,
        main: () => <Signin/>
    },
    {
        path:"/user-profile",
        exact: true,
        main: () => <UserProfile/>
    },
    {
        path:"/messages",
        exact: true,
        main: () => <Message/>
    },
    {
        path:"/all-user",
        exact: true,
        main: () => <AllUser/>
    },
    {
        path:"/",
        exact: true,
        main: () => <Home/>
    },
    {
        path:"/jobs",
        exact: true,
        main: () => <ViewJob/>
    },
    {
        path: "/search",
        exact: true,
        main: () => <Search/>
    },
    {
        path: "/stats",
        exact: true,
        main: () => <Stats/>
    },
    {
        path: "/admin",
        exact: true,
        main: () => <Admin/>
    }
]

export default routes;