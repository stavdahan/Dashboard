import React, { useState } from "react";
import "../style/components/Dropdown.css";

const Dropdown = ({people, addPerson}) => {
    const [selectedPerson, setSelectedPerson] = useState("");

  const handleSelect = (e) => {
      setSelectedPerson(e.target.value);
      addPerson(e.target.value);
      
  };

  return (
    <div className="dropdown">
      <h1 className="dropdown title">Participants</h1>
      <select
        className="custom-select"
        value={selectedPerson}
        onChange={handleSelect}
      >
        <option value="">Add client</option>
        {people.map((person, index) => (
          <option key={index} value={person.name}>
            {person.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
