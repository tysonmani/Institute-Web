import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function NotFound() {
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                    <br /><br /><br /><br /><br />
                    <h1 className="sin" style={{ color: "#2867B2" }}>Communi<span style={{ color: "black" }}>cation</span></h1><br /><br />
                    <h1 className="sin" style={{ color: "#2867B2" }}><span style={{ color: "black" }}>Oops</span>PageNotFound!!</h1>
                    <CircularProgress />

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
                </div>
            </div>
        </div>
    )
}

export default NotFound
