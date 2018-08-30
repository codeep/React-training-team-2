import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './Form';
import Menu from './Menu';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/menu" component={Menu} />
        </Switch>
    </main>
);

export default Main;