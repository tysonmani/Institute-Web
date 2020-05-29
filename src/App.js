import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  const Home = lazy(() => import('./components/Home/Home'));
  const Login = lazy(() => import('./components/Login/Login'));
  const DashboardSideNav = lazy(() => import('./components/DashboardSideNav/DashboardSideNav'));
  const NotFound = lazy(() => import('./components/NotFound/NotFound'));

  return (
    <div>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <DashboardSideNav />
            </Route>
            <Route component={NotFound} />
          </Switch>
      </Suspense>
    </div>
  );
}

export default App;
