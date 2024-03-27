import React from "react";
import "prop-types";

const Card = (props) => {
    return (
        <div className="card" style={{width: "18 rem" }}>
            <img className="card-img-top" src="https://source.unsplash.com/random/300×300" alt="card img" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel neque vel quam ultrices eleifend. Mauris nec libero consectetur, vulputate nisl et, interdum nisl. Nullam rutrum ut lorem tempor eleifend. Sed vehicula bibendum velit, ac imperdiet magna sagittis vitae. Quisque ut eros in lacus mollis malesuada. Maecenas lectus mi, malesuada.</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
};
export default Card;