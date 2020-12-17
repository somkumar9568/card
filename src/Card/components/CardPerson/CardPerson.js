import React from "react";
import "./CardPerson.css";

const Person = (props) => {
  return (
    <div>
      <div className="card__person">
        <div className="card__image-box">
          <img src={props.image} alt="" className="card__image" />
        </div>
        <h3 className="card__name">{props.name}</h3>
      </div>
    </div>
  );
};

export default Person;
