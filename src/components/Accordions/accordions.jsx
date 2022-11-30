import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ heading, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordion-item" style={{}}>
            <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
                <h3>{heading}</h3><h1>{isActive ? "-" : "+"}</h1>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;