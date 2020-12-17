import React from "react";
import "./FooterListItem.css";

const FooterListItem = (props) => {
  return <li className="card__listItem">{props.children}</li>;
};

export default FooterListItem;
