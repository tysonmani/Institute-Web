import React, { useState } from 'react';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import { baseUrl } from '../ServerUrls';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function LoginSignUpOtpService(props) {

    const [MessageHandler, setMessageHandler] = useState({ message: '', success: true });

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const myLoginHandler = (loginDetails) => {

        console.log("Cool",loginDetails);
        // axios.post(baseUrl + '/institute/user/otp/verify', loginDetails, { headers: { 'Authorization': 'Basic bmFyYXNpbW1hbjoxMjM0NTY4OQ==' } })
        //     .then(response => {
        //         console.log(response);
        //         if (response.data.success === true) {
        //             setMessageHandler({ ...MessageHandler, message: response.data.data.message, status: true });
        //             //toggleModal();
        //         }
        //         else {
        //             setMessageHandler({ ...MessageHandler, message: response.data.message, status: false });
        //         }
        //         handleClick();
        //     })
        //     .catch(error => {
        //         console.log(error, error.response, error.message, error.request);
        //         setMessageHandler({ ...MessageHandler, message: error.response.data.message, status: false });
        //         handleClick();
        //     })
    }

    const getOtpHandler = (otpDetails) => {

        console.log("Hot",otpDetails);
        // axios.post(baseUrl + '/institute/user/login', otpDetails, { headers: { 'Authorization': 'Basic bmFyYXNpbW1hbjoxMjM0NTY4OQ==' } })
        //     .then(response => {
        //         console.log(response);
        //         if (response.data.success === true) {
        //             setMessageHandler({ ...MessageHandler, message: response.data.data.message, status: true });
        //         }
        //         else {
        //             setMessageHandler({ ...MessageHandler, message: response.data.message, status: false });
        //         }
        //         handleClick();
        //     })
        //     .catch(error => {
        //         console.log(error, error.response, error.message, error.request);
        //         setMessageHandler({ ...MessageHandler, message: error.response.data.message, status: false });
        //         handleClick();
        //     })
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
            {props.children(myLoginHandler,getOtpHandler)}
        </div>
    )
}

export default LoginSignUpOtpService
