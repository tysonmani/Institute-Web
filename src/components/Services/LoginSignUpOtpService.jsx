import React, { useState } from 'react';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import { baseUrl } from '../ServerUrls';
import MuiAlert from '@material-ui/lab/Alert';
import { Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function LoginSignUpOtpService(props) {

    let history = useHistory();

    const [MessageHandler, setMessageHandler] = useState({ message: '', success: true });

    const [open, setOpen] = React.useState(false);

    const [isModalOpen, setisModalOpen] = useState(false);

    const [MobileNumber, setMobileNumber] = useState('');

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

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const myLoginHandler = (loginDetails,MobileNumber) => {

        console.log("LoginDetails",loginDetails);
        setMobileNumber(MobileNumber);
        axios.post(baseUrl + '/institute/user/otp/verify', loginDetails, { headers: { 'Authorization': 'Basic bmFyYXNpbW1hbjoxMjM0NTY4OQ==' } })
            .then(response => {
                console.log(response);
                if (response.data.success === true) {
                    setMessageHandler({ ...MessageHandler, message: response.data.data.message, status: true });
                    toggleModal();
                }
                else {
                    setMessageHandler({ ...MessageHandler, message: response.data.message, status: false });
                }
                handleClick();
            })
            .catch(error => {
                console.log(error, error.response, error.message, error.request);
                setMessageHandler({ ...MessageHandler, message: error.response.data.message, status: false });
                handleClick();
            })
    }

    const getOtpHandler = (otpDetails) => {

        console.log("OtpDetails",otpDetails);
        axios.post(baseUrl + '/institute/user/login', otpDetails, { headers: { 'Authorization': 'Basic bmFyYXNpbW1hbjoxMjM0NTY4OQ==' } })
            .then(response => {
                console.log(response);
                if (response.data.success === true) {
                    setMessageHandler({ ...MessageHandler, message: response.data.data.message, status: true });
                }
                else {
                    setMessageHandler({ ...MessageHandler, message: response.data.message, status: false });
                }
                handleClick();
            })
            .catch(error => {
                console.log(error, error.response, error.message, error.request);
                setMessageHandler({ ...MessageHandler, message: error.response.data.message, status: false });
                handleClick();
            })
    }

    return (
        <div>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }} open={open} autoHideDuration={3000} onClose={handleClose}>
                {
                    MessageHandler.status === true ?
                        <Alert onClose={handleClose} severity="success">
                            {MessageHandler.message}
                        </Alert> :
                        <Alert onClose={handleClose} severity="error">
                            {MessageHandler.message}
                        </Alert>
                }
            </Snackbar>
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
            {props.children(myLoginHandler,getOtpHandler)}
        </div>
    )
}

export default LoginSignUpOtpService
