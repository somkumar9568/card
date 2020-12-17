import React from "react";
import "./CardFooter.css";
import FooterList from "./FooterList/FooterList";

const CardFooter = (props) => {
  return (
    <div className="card__footer">
      <FooterList contact={props.contact} />
    </div>
  );
};

export default CardFooter;
