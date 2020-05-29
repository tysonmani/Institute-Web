import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LazyLoader from '../LazyLoader/LazyLoader';

function ChildRoutes(props) {

    const InstituteHome = lazy(() => import('./Institute/Home/Home'));
    const InstituteOnboard = lazy(() => import('./Institute/Onboard/Onboard'));
    const TeacherHome = lazy(() => import('./Teacher/Home/Home'));
    const TeachersDashboard = lazy(() => import('./Teacher/TeachersDashboard/TeachersDashboard'));

    return (
        <div>
            <Suspense fallback={LazyLoader()}>
                    <Switch>
                        <Route exact path="/dashboard">
                            <Redirect to="/dashboard/institute/home"/>
                        </Route>
                        <Route exact path="/dashboard/institute/home">
                        <InstituteHome />
                        </Route>
                        <Route exact path="/dashboard/institute/onboard">
                        <InstituteOnboard />
                        </Route>
                        <Route exact path="/dashboard/teacher/home">
                        <TeacherHome />
                        </Route>
                        <Route exact path="/dashboard/teacher/teachersDashboard">
                        <TeachersDashboard />
                        </Route>
                        <Route>
                        {props.children}
                        </Route>
                    </Switch>
            </Suspense>
        </div>
    )
}

export default ChildRoutes
