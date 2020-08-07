import React from 'react';

import Signin from './components/Signin-Signup/index';
import UserProfile from './components/User-Profile/index';
import Message from './components/Message/Message-Page/index';
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
    }
]

export default routes;