import React from "react";
import coachSVG from "../style/vectors/coachVector.svg";
import timeSVG from "../style/vectors/timeVector.svg";
import participantsSVG from "../style/vectors/participantsVector.svg";
import '../style/components/TrainingDetails.css'

const TrainingDetails = () => { 
    return (
      <div className="details">
        <div className="coach">
          <img className="coach svg" src={coachSVG} />
          <h1 className="coach title">Tom A</h1>
          <p className="coach name">Coach</p>
        </div>
        <div className="time">
          <img className="time svg" src={timeSVG} />
          <h1 className="time title">16:15</h1>
          <p className="time hour">Start Time</p>
        </div>
        <div className="participants">
          <img className="participants svg" src={participantsSVG} />
          <h1 className="participants number">3/15</h1>
          <p className="participants p">Participants</p>
        </div>
      </div>
    );
}

export default TrainingDetails;