import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const Home = lazy(() => import('./components/Home/Home'));
  const Login = lazy(() => import('./components/Login/Login'));
  const DashboardSideNav = lazy(() => import('./components/DashboardSideNav/DashboardSideNav'));
  const DashboardHeader = lazy(() => import('./components/DashboardHeader/DashboardHeader'));
  const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));

  return (
    <div>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
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
            <Route exact path="/dashboard/home">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
