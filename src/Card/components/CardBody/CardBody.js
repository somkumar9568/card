import React from "react";
import "./CardBody.css";

const CardBody = (props) => {
  // Method to cut body text
  const truncateText = (str, n) =>
    str.length > n ? str.substr(0, n - 1) + " ...." : str;

  return (
    <div>
      <p className="card__body">{truncateText(props.text, 160)}</p>
    </div>
  );
};

export default CardBody;
