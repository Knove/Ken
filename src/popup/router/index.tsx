import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SuperDiscount from '../page/SuperDiscount';

const RouteComponent = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/Home/SuperDiscount" />
            </Route>

            <Route exact path="/Home/SuperDiscount">
                <SuperDiscount />
            </Route>
        </Switch>
    );
};

export default RouteComponent;
