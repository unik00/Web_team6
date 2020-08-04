import React from 'react';

import Signin from './components/Signin-Signup/index';
import UserProfile from './components/User-Profile/index';
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
    }
]

export default routes;