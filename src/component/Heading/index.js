import React from "react";

const Heading = ({ value = "", color = "black" }) => {
    return (
        <p style={{
            color: color
        }}>{value}
        </p>
    );
}
export default Heading;
