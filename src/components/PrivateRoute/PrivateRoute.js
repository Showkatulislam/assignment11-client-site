import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useFirebase from '../../Firebase/useFirebase';

const PrivateRoute = ({children,...rest}) => {
    const { user, loading } = useFirebase()
    if (loading) return 'loading';
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;