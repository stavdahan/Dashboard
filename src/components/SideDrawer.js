import React, { useState, useEffect } from "react";
import "../style/components/SideDrawer.css";
import TopButtons from "./TopButtons";
import purpleCircle from "../style/vectors/purpleCircle.svg";
import TrainingDetails from "./TrainingDetails";
import Dropdown from "./Dropdown";
import DaganSVG from "../style/vectors/Dagan.svg";
import EdenSVG from "../style/vectors/Eden.svg";
import TomSVG from "../style/vectors/Tom.svg";
import TomerSVG from "../style/vectors/Tomer.svg";
import TomiSVG from "../style/vectors/Tomi.svg";
import YoniSVG from "../style/vectors/Yoni.svg";
import whatsapp from "../style/vectors/whatsapp.svg";
import bin from "../style/vectors/bin.svg";
import Participant from "./Participant";


const SideDrawer = ({ isVisible }) => {
  const peopleArray = [
    {
      name: "Dagan Lev",
      img: DaganSVG,
      checked: true,
      onDropdown: false,
    },
    {
      name: "Eden Elian",
      img: EdenSVG,
      checked: false,
      onDropdown: false,
    },
    {
      name: "Yoni Yatziv",
      img: YoniSVG,
      checked: false,
      onDropdown: false,
    },
    {
      name: "Tom Levi",
      img: TomSVG,
      checked: false,
      onDropdown: true,
    },
    {
      name: "Tomer Cohen",
      img: TomerSVG,
      checked: false,
      onDropdown: true,
    },
    {
      name: "Tomi Tomi",
      img: TomiSVG,
      checked: false,
      onDropdown: true,
    }
  ];
  const [people, setPeople] = useState(peopleArray)

  const movePerson = (name) => { 
    const copyPeople = [...people]
    const filteredPeople = copyPeople.map((person) => {
      if (person.name === name) {
        person.onDropdown = !person.onDropdown
      }
      return person
    })
    setPeople(filteredPeople)
  }

  const check = (name) => {
    const copyPeople = [...people];
    const filteredPeople = copyPeople.map((person) => {
      if (person.name === name) {
        person.checked = !person.checked;
      }
      return person;
    });
    setPeople(filteredPeople);
  };


    return (
      <div className={`sideDrawer ${isVisible}`} disabled={true}>
        <TopButtons />
        <img className="purpleCircle" src={purpleCircle} />
        <h1>Workout of the day</h1>
        <div className="delimiter" />
        <TrainingDetails />
        <div className="delimiter" />
        <h1 className="news">You Should Know...</h1>
        <p className="subnews">
          Dagan & Eden which participates in the class have debt
        </p>
        <div className="delimiter" />
        <Dropdown
          people={people.filter((person) => person.onDropdown)}
          addPerson={movePerson}
        />
        {people && people.map((person) => { 
          if (!person.onDropdown) { 
            return (
              <Participant 
                name={person.name}
                pic={person.img}
                check={person.checked}
                whatsapp={whatsapp}
                bin={bin}
                removePerson={movePerson}
                checkFunc={check}
              />
            );

          }
        })}
      </div>
    );

};

export default SideDrawer