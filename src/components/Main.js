import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './Form';
import Menu from './Menu';
import ErrorPage from './404';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/form" component={Form} />
            <Route path="*" component={ErrorPage} />
        </Switch>
    </main>
);

export default Main;
