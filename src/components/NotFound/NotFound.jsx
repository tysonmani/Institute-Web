import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                    <br /><br /><br /><br /><br />
                    <h1 id="sin" style={{ color: "#B99E01" }}>Institute-<span style={{ color: "black" }}>Web</span></h1><br /><br />
                    <h1 id="sin" style={{ color: "#B99E01" }}><span style={{ color: "black" }}>Oops</span>PageNotFound!!</h1>
                    <div id="sin" className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
                </div>
            </div>
        </div>
    )
}

export default NotFound
