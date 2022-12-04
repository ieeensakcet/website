import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({Question, Answer, styles}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="panel" style={{
            color: styles === "1" ? "#fff" : "#000", 
        }}>
            <div className="panel-heading" onClick={() => setIsActive(!isActive)}>
                <div style={{
                   
                    fontSize: "1.5rem",
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    cursor: "pointer",

                }} >
                    <p style={{
                        color: styles === "1" ? "#fff" : "#000", 
                        fontWeight: "bold",
                        fontFamily: "inherit",
                    }}>{Question}</p>
                    <span class="pull-right">{isActive ? <i class="ion-chevron-up"></i> : <i class="ion-chevron-down"></i>}</span>
                </div>
            </div>
            {isActive && <div className="panel-collapse"> <div class="panel-body" style={{
                color: "black"
            }}><p style={{
                    color:"#000",
                    fontFamily: "inherit",
                    fontSize: "1.2rem",

            }}>{Answer}</p></div></div>}
        </div>
    );
};

export default Accordion;