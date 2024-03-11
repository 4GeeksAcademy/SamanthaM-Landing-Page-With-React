import React from "react";
import "./cardStyles.css";

const Card = () => {
    return (
        <div className="card" style={{width: "18 rem" }}>
            <img className="card-img-top" src=".." alt="card img" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Random Text</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
};
export default Card;