import React, { useState, useEffect} from 'react';
import "./Login.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ErrorStatus, setErrorStatus] = useState(null);

    let history = useHistory();

    useEffect(() => {
        console.log(history,history.location);
      },[]);

    const mySubmitHandler = () => {
        console.log(Username, Password);
        const logindetails = { "userName": Username, "password": Password };
        axios.post('http://138.201.253.230:8080/user/login', logindetails, { headers: { "Application": "biFrost" } })
            .then(response => {
                console.log(response,history);
                localStorage.setItem('loggedIn','true');
                localStorage.setItem('loggedUser',Username);
                history.push(
                    {
                        pathname: '/dashboard',
                        state:{
                            loggedUser:Username
                        }
                    }
                );
            })
            .catch(error => {
                console.log(error, error.response, error.message, error.request);
                setErrorStatus(error.response.data);
            })
    }

    return (
        <div>
            <div className="container-fluid my-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <br /><br /><br /><br /><br /><br /><br />
                        <div className="login">
                            <h5 style={{ color: "#B99E01" }}><i className="fa fa-graduation-cap"></i>Institute-<span style={{ color: "black" }}>Web</span></h5>
                            <h6 style={{ color: "#B99E01" }}>Log<span style={{ color: "black" }}>in</span></h6><br />
                            <form>
                                <input placeholder="Username" type="text" value={Username} onChange={e => {
                                    setUsername(e.target.value);
                                    setErrorStatus(null);
                                }} /><br /><div style={{ marginTop: "2px" }} />
                                <input placeholder="Password" type="password" value={Password} onChange={e => { 
                                    setPassword(e.target.value);
                                    setErrorStatus(null);
                                    }} /><br /><br />
                                <button onClick={mySubmitHandler} className="button button1" type="button" disabled={Username === '' || Password === ''}>Login</button><br /><br />
                                {ErrorStatus ? <p style={{ color: "red" }}>{ErrorStatus}</p> : null}
                                <span>
                                    <p style={{ fontSize: "80%",color: "#B99E01" }}>Institute-Web v1.0<br />
                                    <span style={{ color: "black" }}>Institute-Web Limited© 2020</span></p>
                                </span>
                            </form>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login