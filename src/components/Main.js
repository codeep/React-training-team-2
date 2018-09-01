import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './Form';
import Menu from './Menu';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/form" component={Form} />
        </Switch>
    </main>
);

export default Main;