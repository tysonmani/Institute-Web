import React, { useState } from 'react';
import "./Login.css";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Login(props) {

    let history = useHistory();

    const [MobileNumber, setMobileNumber] = useState('');
    const [OTP, setOTP] = useState('');

    const signUpHandler = () => {
        history.push(
            {
                pathname: '/signUp',
            }
        );
    }

    return (
        <div>
            <div className="container-fluid my-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <br /><br /><br /><br /><br />
                        <div className="login">
                            <h5 style={{ color: "#B99E01" }}><i className="fa fa-graduation-cap"></i>Institute-<span style={{ color: "black" }}>Web</span></h5>
                            <h6 style={{ color: "#B99E01" }}>Log<span style={{ color: "black" }}>in</span></h6><br />
                            <form>
                                <Button onClick={() => props.getOtpHandler(
                                    {
                                        "mobileNumber": MobileNumber
                                    }
                                )} disabled={MobileNumber.length !== 10} style={{ fontSize: "60%", float: "right" }} variant="contained" color="primary">Send Otp</Button><br /><div style={{ marginBottom: "12px" }} />
                                <input placeholder="MobileNumber" type="number" value={MobileNumber} onChange={e => {
                                    setMobileNumber(e.target.value);
                                }} />
                                <br /><div style={{ marginTop: "2px" }} />
                                <input placeholder="OTP" type="number" value={OTP} onChange={e => {
                                    setOTP(e.target.value);
                                }} /><br /><br />
                                <button onClick={() => props.myLoginHandler(
                                    {
                                        "firstName":null,
                                        "lastName":null,
                                        "emailId":null,
                                        "mobileNumber":MobileNumber,
                                        "dateOfBirth":null,
                                        "role":null, 
                                        "otp":OTP, 
                                        "type":"LOGIN"
                                    },
                                    MobileNumber
                                )} className="button button1" type="button" disabled={MobileNumber === '' || MobileNumber.length !== 10 || OTP === ''}>Login</button><br /><br />
                                <span><Button onClick={signUpHandler} style={{ fontSize: "60%", float: "right" }} variant="contained" color="primary">New User ?</Button></span><br /><br />
                                <span>
                                    <p style={{ fontSize: "80%", color: "#B99E01" }}>Institute-Web v1.0<br />
                                        <span style={{ color: "black" }}>Institute-Web Limited© 2020</span></p>
                                </span>
                            </form>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Login


