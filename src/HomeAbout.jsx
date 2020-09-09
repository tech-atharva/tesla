import React from "react";
import {NavLink} from 'react-router-dom'

const About = (props) => {
    return(
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 py-5"><p className="para">{props.line}<p className="brand">{props.brand}</p></p>
                    <p> {props.more} </p>
                    <NavLink className="btn btn-main" to={props.visit}>{props.btn}</NavLink>
                    </div>
                    <img className="col-lg-6" src={props.image}/>
                </div>
            </div>
        </>
    )
}
export default About;