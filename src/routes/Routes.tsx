import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import {
  Instructions,
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  Playground,
  Dashboard,
  Adm,
  Exam,
  Teste,
} from '../presentation/page';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/instructions" component={Instructions} />
      <Route path="/playground" component={Playground} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/register" component={RegisterComponent} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/adm" component={Adm} />
      <Route path="/exam" component={Exam} />
      <Route path="/test" component={Teste} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
