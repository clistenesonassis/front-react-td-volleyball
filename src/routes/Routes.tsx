import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import {
  Instructions,
  Register,
  Home,
  Playground,
  Result,
} from '../presentation/page';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/instructions" component={Instructions} />
      <Route path="/playground" component={Playground} />
      <Route path="/register" component={Register} />
      <Route path="/result" component={Result} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
