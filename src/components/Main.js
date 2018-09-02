import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './Form';
import Menu from './Menu';
import ErrorPage from './404';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={ErrorPage} />
            <Route path="/form" component={Form} />
            <Route path="*" exact={true} component={Menu} />
        </Switch>
    </main>
);

export default Main;