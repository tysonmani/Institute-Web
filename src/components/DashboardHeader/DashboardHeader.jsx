import React, { useState, useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";

function DashboardHeader() {

let location = useLocation();
let history = useHistory();

const [isOpenNav, setisOpenNav] = useState(false);
const [loggedUser, setloggedUser] = useState(null);

let loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');


useEffect(() => {
    console.log(history);
    if (loggedInStatus === false) {
        history.push(
            {
                pathname: "/home"
            }
        )
    }
    else
    {
        let userName =  localStorage.getItem('loggedUser') ? localStorage.getItem('loggedUser') : location.state.loggedUser;
        console.log(userName,"Lol");
        setloggedUser(userName);
    }
    openNav();
}, []);


    const openNav = () => {
        console.log("Cool");
        if(isOpenNav === false)
        {
          document.getElementById("mySidenav").style.width = "220px";
          document.getElementById("main").style.marginLeft = "220px";
          setisOpenNav(true);
        }
        else
        {
          document.getElementById("mySidenav").style.width = "0px";
          document.getElementById("main").style.marginLeft = "0px";
          setisOpenNav(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('loggedIn');
        history.push(
            {
                pathname: "/home"
            }
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light">
                <div id="main">
                    <span className="openbutton" onClick={openNav}>&#9776;</span>
                </div>
                <h5 style={{ color: "#2867B2", cursor: "pointer" }}>Cool</h5>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="dropdown">
                                <a style={{cursor: "pointer"}} className="dropbtn" className="button2" ><i className="fa fa-user" style={{color: "#2867B2",fontSize: "120%"}}></i>&nbsp;{loggedUser}<i className="fa fa-caret-down"></i></a>
                                <div className="dropdown-content">
                                    <a style={{ cursor: "pointer" }} onClick={logout}><i className="fa fa-power-off" style={{ color: "#2867B2", fontSize: "120%" }}></i>&nbsp;Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default DashboardHeader
