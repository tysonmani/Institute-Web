import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();

    const goToLogin = () => {
        history.push(
            {
                pathname: "/login"
            }
        )
    };


    return (
        <div>
            Home
            <Button onClick={goToLogin} variant="outlined" color="primary">Login</Button>
        </div>
    )
}

export default Home
