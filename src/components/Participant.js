import React from "react";
import "../style/components/Participant.css";
const Participant = ({
    name,
    pic,
    check,
    whatsapp,
    bin,
    removePerson,
    checkFunc
}) => { return (
  <div className="participant">
    <img className="person pic" src={pic} />
    <p className="person name">{name}</p>
    <div className="right-side">
      <button
        className={`person check ${check}`}
        onClick={() => checkFunc(name)}
            >{ check ? 'Checked' : 'Check In'}</button>
      <img src={whatsapp} />
      <img
        className="bin"
        onClick={() => removePerson(name)}
        src={bin} />
    </div>
  </div>
);
}

export default Participant;