import React, { useState, useEffect } from 'react';
import "./Login.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { baseUrl } from '../ServerUrls';

function Login() {

    const [MobileNumber, setMobileNumber] = useState('');
    const [OTP, setOTP] = useState('');
    const [ErrorStatus, setErrorStatus] = useState(null);
    const [isModalOpen, setisModalOpen] = useState(false);

    let history = useHistory();

    useEffect(() => {
        console.log(history, history.location);
    }, []);

    const mySubmitHandler = () => {
        console.log(MobileNumber, OTP);
        const logindetails = { "mobileNumber": MobileNumber };
        axios.post(baseUrl + '/institute/user/login', logindetails)
            .then(response => {
                console.log(response, history);
                toggleModal();
            })
            .catch(error => {
                console.log(error, error.response, error.message, error.request);
                setErrorStatus(error.response.data);
            })
        toggleModal();
    }

    const getOtpHandler = () => {
        console.log(MobileNumber);
    }

    const signUpHandler = () => {
        history.push(
            {
                pathname: '/signUp',
            }
        );
    } 

    const toggleModal = () => {
        setisModalOpen(!isModalOpen);
    }

    const myRouteHandler = () => {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('loggedUser', MobileNumber);
        history.push(
            {
                pathname: '/dashboard',
                state: {
                    loggedUser: MobileNumber
                }
            }
        );
    }

    return (
        <div>
            <div className="container-fluid my-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <br /><br /><br /><br /><br /><br /><br />
                        <div className="login">
                            <h5 style={{ color: "#B99E01" }}><i className="fa fa-graduation-cap"></i>Institute-<span style={{ color: "black" }}>Web</span></h5>
                            <h6 style={{ color: "#B99E01" }}>Log<span style={{ color: "black" }}>in</span></h6><br />
                            <form>
                                <Button onClick={getOtpHandler} disabled={MobileNumber.length != 10} style={{ fontSize: "60%", float: "right" }} variant="contained" color="primary">Send Otp</Button><br /><div style={{ marginBottom: "12px" }} />
                                <input placeholder="MobileNumber" type="number" value={MobileNumber} onChange={e => {
                                    setMobileNumber(e.target.value);
                                    setErrorStatus(null);
                                }} />
                                <br /><div style={{ marginTop: "2px" }} />
                                <input placeholder="OTP" type="number" value={OTP} onChange={e => {
                                    setOTP(e.target.value);
                                    setErrorStatus(null);
                                }} /><br /><br />
                                <button onClick={mySubmitHandler} className="button button1" type="button" disabled={MobileNumber === '' || MobileNumber.length != 10 || OTP === ''}>Login</button><br /><br />
                                {ErrorStatus ? <p style={{ color: "red" }}>{ErrorStatus}</p> : null}
                                <span><Button onClick={signUpHandler} style={{ fontSize: "60%", float: "right" }} variant="contained" color="primary">New User ?</Button></span><br/><br/>
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
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }} toggle={toggleModal}>
                    <Button style={{ fontSize: "60%" }} variant="contained" color="primary">Roles</Button>
                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                            <Button onClick={myRouteHandler} startIcon={<i className="fa fa-graduation-cap"></i>} style={{ fontSize: "90%" }} variant="contained" color="primary">Institute</Button>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                            <Button onClick={myRouteHandler} startIcon={<i className="fas fa-chalkboard-teacher"></i>} style={{ fontSize: "90%" }} variant="contained" color="primary">Teacher</Button>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                    </div><br /><br />
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                            <Button onClick={myRouteHandler} startIcon={<i className="fas fa-user-graduate"></i>} style={{ fontSize: "90%" }} variant="contained" color="primary">Student</Button>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                            <Button onClick={myRouteHandler} startIcon={<PersonIcon />} style={{ fontSize: "90%" }} variant="contained" color="primary">Guest</Button>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ fontSize: "70%" }} variant="contained" color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Login


