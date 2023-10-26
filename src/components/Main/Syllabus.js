import React from "react";
import "./styles.css";
import { Line } from "rc-progress";

const Syllabus = ({ heading, value, strokeColor, trailColor }) => {
  return (
    <div className="syllabus__div">
      <p className="progress__heading">{heading}</p>
      <div className="progress__div">
        <Line
          percent={value}
          strokeWidth={5}
          trailWidth={5}
          strokeColor={strokeColor}
          trailColor={trailColor}
          style={{
            width: "60%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <p className="progress__percentage">{value}%</p>
      </div>
    </div>
  );
};

export default Syllabus;
