import React from "react";
import editSVG from "../style/vectors/editVector.svg";
import cancelClassSVG from "../style/vectors/cancelClassVector.svg";
import "../style/components/TopButtons.css"
import TopButton from "./TopButton";

const TopButtons = () => {

    return (
      <div className="topButtons">
        <TopButton
          className="topButton edit"
          text={"Edit"}
          svg={editSVG}
        />
        <TopButton
          className="topButton cancelClass"
          text={"Cancel Class"}
          svg={cancelClassSVG}
        />
      </div>
    );
}
export default TopButtons;