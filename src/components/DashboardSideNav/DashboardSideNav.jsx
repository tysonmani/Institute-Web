import React from 'react';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function DashboardSideNav(props) {

    let history = useHistory();

    const route = () => {
        history.push(
            {
                pathname: "/dasboard/home"
            }
        )
    }

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <div style={{ backgroundColor: "#2867B2" }}><br />
                    <span style={{ color: "white", fontSize: "120%" }}><a
                        style={{ color: "white", cursor: "pointer", textDecoration: "none", padding: "0%" }}>
                        <i className="fa fa-rocket"
                            style={{ color: "white", marginLeft: "30px", fontSize: "24px" }}></i>&nbsp;&nbsp;Communication</a></span>
                    <hr style={{ backgroundColor: "white", marginTop: "35px" }} />
                </div>
                <a onClick={route}><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp;Onboard</a>
            </div>
            <div id="main">
                {props.children}
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/das" />
                        </Route>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </BrowserRouter> */}
            </div>
        </div>
    )
}

export default DashboardSideNav
