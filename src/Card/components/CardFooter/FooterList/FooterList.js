import React from "react";
import "./FooterList.css";
import FooterListItem from "./FooterListItem/FooterListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const FooterList = (props) => {
  const icons = [faMapMarker, faEnvelope, faPhone];
  const arrayOfContacts = Object.keys(props.contact);

  return (
    <ul className="card__list">
      {arrayOfContacts.map((val, i) => {
        return (
          <React.Fragment key={i}>
            <FooterListItem>
              <FontAwesomeIcon icon={icons[i]} className="card__icon" />
              {props.contact[val]}
            </FooterListItem>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default FooterList;
