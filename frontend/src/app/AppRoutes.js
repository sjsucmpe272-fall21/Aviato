import React, { Component,Suspense, lazy, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));
const Season = lazy(() => import('./charts/Season'));
const Week = lazy(() => import('./charts/Week'));
const Weight = lazy(() => import('./charts/Weight'));
const Height = lazy(() => import('./charts/Height'));
const Position = lazy(() => import('./charts/Position'));
const HeadToHead = lazy(() => import('./charts/Headtohead'));
const GamesEasternTime = lazy(() => import('./charts/gameEasternTime'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>

        <Switch>
          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          {/* <Route exact path="/dashboard" component={ Dashboard } /> */}
          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/mdi" component={ Mdi } />

          {/* <Route path="/charts/chart-js" component={ ChartJs } /> */}
          <Route path="/charts/season-js" component={ Season } />
          <Route path="/charts/week-js" component={ Week } />
          <Route path="/charts/weight-js" component={ Weight } />
          <Route path="/charts/height-js" component={ Height } />
          <Route path="/charts/position-js" component={ Position } />
          <Route path="/charts/head-to-head-js" component={ HeadToHead } />
          <Route path="/charts/game-eastern-time-js" component={ GamesEasternTime } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/charts/season-js" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;