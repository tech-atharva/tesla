import React from "react";

const Cars = (props) => {
    return(
        <>
            <div className="container">
                <div className="row py-4 px-1 px-auto">
                    <div className="cont col-lg-6 py-2 col-sm-12">
                        <h1>{props.name}</h1>
                        <img src={props.image}/>
                        <a href={props.url} target="__blank" className="btn btn-main"> Order Now</a>
                    </div>
                    <div className="cont col-lg-6 py-5 col-sm-12">
                        <iframe width="560" height="315" src={props.video} autoplay frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cars;