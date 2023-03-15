import React from "react";
import "../style/components/TopButtons.css";

const TopButton = ({ className, text, svg }) => {
    return (
      <button className={className}>
        <img className={`${className} icon`} src={svg} />
        <p className={`${className} text`}>{text}</p>
      </button>
    );
};

export default TopButton