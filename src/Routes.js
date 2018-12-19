import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/home';
import AddLink from './containers/addlink';
import u from './containers/u';
export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addlink" exact component={AddLink} />
        <Route path="/u/:hashLink"  component={u} />
    </Switch>